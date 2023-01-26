<template>
  <Page class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Home"></Label>
    </ActionBar>

    <StackLayout>
      <Label class="info" horizontalAlignment="center" verticalAlignment="center">
        <Span class="fa" text.decode="&#xf135;"/>
        <Span :text="message"/>
      </Label>
      <RiveView marginTop="16" ref="refRive" src="res://raw/xxxx.riv" autoPlay="true"></RiveView>
      <Button :text="play" @tap="update" horizontalAlignment="center" verticalAlignment="center"></Button>
    </StackLayout>
  </Page>
</template>

<script>
function generateItems(count, offset = 0) {
  return new Array(count).fill().map((_, i) => ({
    name: `Item ${i}`,
    description: `Item ${i} description`,
    lottie: '~/assets/LottieLogo1.json'
  }));
}

export default {
  data() {
    return {
      play: true,
      items: generateItems(50),
    };
  },
  computed: {
    message() {
      return 'Rive {N}-Vue Demo App';
    }
  },
  methods: {
    update() {
      const riveView = this.$refs.refRive.nativeView;

      if (riveView.isAnimating()) {
        riveView.stopAnimation()
      } else {

        riveView.playAnimation()
        // riveView.playAnimation()
      }
    }
  }
};
</script>

<style scoped lang="scss">
// Start custom common variables
@import '../app-variables';
// End custom common variables

// Custom styles
.fa {
  color: blue;
}

.info {
  font-size: 20;
}
</style>
