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

      <RiveView marginTop="16" :onPlay="onPlay" :onStop="onStop" :onPause="onPause" :onLoopEnd="onLoopEnd"
                :onStateChanged="onStateChanged" ref="refRive" src="@/assets/compass" height="200" width="200"
                autoPlay="true"></RiveView>
      <RiveView marginTop="16" src="@/assets/button" height="200" width="200" autoPlay="true"></RiveView>
      <!--
            <RiveView marginTop="16"  src="res://raw/example.riv" autoPlay="true"></RiveView>
      -->

      <Button :text="play ? 'Stop' : 'Play'" @tap="update" horizontalAlignment="center"
              verticalAlignment="center"></Button>
    </StackLayout>
  </Page>
</template>

<script lang="ts">
import {RiveView} from "@nativescript-community/ui-rive/rive.android";


export default {
  data() {
    return {
      play: true,
    };
  },
  computed: {
    message() {
      return 'Rive {N}-Vue Demo App';
    }
  },
  methods: {
    update() {
      const riveView = this.$refs.refRive.nativeView as RiveView;
      if (riveView.isPlaying()) {
        riveView.stop()
        this.play = false;
      } else {
        riveView.play()
        this.play = true;

      }
    },
    onPlay() {
      console.log("onPlay")
    },
    onStop() {
      console.log("onStop")
    },
    onPause() {
      console.log("onPause")
    },
    onLoopEnd() {
      console.log("onLoopEnd")
    },
    onStateChanged() {
      console.log("onStateChanged")
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
