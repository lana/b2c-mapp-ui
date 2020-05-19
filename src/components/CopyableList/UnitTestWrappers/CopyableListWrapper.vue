<template>
  <section data-testid="wrapper">
    <CopyableList :title="title">
      <CopyableListItem title="An info example"
                        text="Text to be copied"
      >
        <InfoIcon/>
      </CopyableListItem>
      <CopyableListItem title="Random URL (with hidden copy button)"
                        text="https://source.unsplash.com/random/24x24"
                        hide-button
      >
        <img src="https://source.unsplash.com/random/24x24">
      </CopyableListItem>
      <CopyableListItem title="FaceID"
                        text="1234567890ABCDE"
      >
        <FaceIdIcon/>
      </CopyableListItem>
      <CopyableListItem title="Touch ID"
                        text="1234567890ABCDE"
      >
        <TouchIdIcon/>
      </CopyableListItem>
      <div slot="content">
        <p style="margin: 20px">Some example extra content</p>
      </div>
    </CopyableList>
  </section>
</template>
<script>
import { InfoIcon, FaceIdIcon, TouchIdIcon } from '@lana/b2c-mapp-ui-assets/dist/index';

import CopyableList from '../CopyableList.vue';
import CopyableListItem from '../../CopyableListItem/CopyableListItem.vue';

export default {
  name: 'CopyableListWrapper',
  components: {
    CopyableList,
    CopyableListItem,
    InfoIcon,
    FaceIdIcon,
    TouchIdIcon,
  },
  data() {
    return {
      title: 'Title',
    };
  },
};

</script>
