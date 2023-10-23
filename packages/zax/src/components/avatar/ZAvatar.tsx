import * as avatar from "@zag-js/avatar";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { HTMLAttributes, PropType, computed, defineComponent } from "vue";

import avatarRecipe from "./recipe";
import { ZLoadingProps } from "../loading/ZLoading";
import useId from "@/src/hooks/useId";
import { CompWithAttr } from "@/src/types/global";

function generateAvatarName(name?: string): string {
  if (!name) {
    return "";
  }

  let initials = "";

  const nameArray = name.trim().split(" ");

  if (nameArray.length === 1) {
    initials = nameArray[0].substring(0, 2);
  } else {
    initials = `${nameArray[0].charAt(0)}${nameArray[
      nameArray.length - 1
    ].charAt(0)}`;
  }

  return initials.toUpperCase();
}

const ZAvatar = defineComponent({
  name: "ZAvatar",
  props: {
    name: {
      type: String,
    },
    src: {
      type: String,
    },
    size: {
      type: String,
      default: "64px",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    loadingType: {
      type: String as PropType<ZLoadingProps["type"]>,
      default: "default",
    },
  },
  setup(props) {
    const { id } = useId("avatar");

    const [state, send] = useMachine(avatar.machine({ id }));

    const apiRef = computed(() =>
      avatar.connect(state.value, send, normalizeProps),
    );

    const classesRef = computed(() => avatarRecipe());
    const sizeStyle = { width: props.size, height: props.size };

    return () => {
      const api = apiRef.value;
      const classes = classesRef.value;

      return (
        <div
          {...api.rootProps}
          style={sizeStyle}
          class={classes.root}
          v-loading={[props.loading, props.loadingType]}
        >
          <div
            {...api.fallbackProps}
            style={sizeStyle}
            class={classes.fallback}
          >
            {generateAvatarName(props.name)}
          </div>
          <img
            alt={props.name}
            src={props.src}
            {...api.imageProps}
            style={sizeStyle}
            class={classes.image}
          />
        </div>
      );
    };
  },
});

export default ZAvatar as CompWithAttr<typeof ZAvatar, HTMLAttributes>;
export type ZAvatarProps = InstanceType<typeof ZAvatar>["$props"];
