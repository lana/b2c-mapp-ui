// +build mage

package main

import (
	"fmt"
	"os"
	"path/filepath"

	"github.com/magefile/mage/sh"
)

const (
	name        = "mapplibs"
	port        = "3000"
	nodeVerison = "11.7"
)

// Install makes sure we have all the modules we need are installed.
func Install() error {
	return frontDockerCmd("npm", "install")
}

// Build creates a static version of the site.
func Build() error {
	return frontDockerCmd("npm", "run", "build")
}

// Run starts listening for connections in the docker environment
func Run() error {
	// If we're running, we obviously do not need the build path!
	if _, err := os.Stat("./build"); err == nil {
		err = sh.Run("rm", "-r", "./build")
		if err != nil {
			return err
		}
	}
	return frontDockerCmd("npm", "run", "start")
}

func frontDockerCmd(cmd ...string) error {
	p, _ := filepath.Abs("./")
	args := []string{"run", "--rm",
		"--name", name,
		"--label", "traefik.enable=true",
		"--expose", port,
		"--network", "lana-local",
		"-v", fmt.Sprintf("%v:/front:cached", p),
		"-w", "/front",
		"-it", // Interactve!
		"node:"+nodeVersion,
	}
	args = append(args, cmd...)
	return sh.Run("docker", args...)
}

