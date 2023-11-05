import * as toast from "@zag-js/toast";
import { normalizeProps, useActor } from "@zag-js/vue";
import { PropType, computed, defineComponent } from "vue";

import toastRecipe from "./recipe";
import IconClose from "../icon/close";

const ZToast = defineComponent({
  props: {
    actor: {
      type: Object as PropType<
        Parameters<
          typeof useActor<toast.MachineContext, toast.MachineState>
        >["0"]
      >,
      required: true,
    },
  },
  setup(props) {
    const [state, send] = useActor<toast.MachineContext, toast.MachineState>(
      props.actor,
    );

    const apiRef = computed(() =>
      toast.connect(state.value, send, normalizeProps),
    );

    const classesRef = computed(() => toastRecipe());

    return () => {
      const api = apiRef.value;
      const classes = classesRef.value;
      return (
        <div {...api.rootProps} class={classes.root}>
          <h3 {...api.titleProps} class={classes.title}>
            {api.title}
          </h3>
          <p {...api.descriptionProps} class={classes.description}>
            {api.description}
          </p>
          <button onClick={api.dismiss} class={classes.close}>
            <IconClose />
          </button>
        </div>
      );
    };
  },
});

export default ZToast;
