import * as toast from "@zag-js/toast";
import { normalizeProps, useActor, useMachine } from "@zag-js/vue";
import { PropType, computed, defineComponent, inject, reactive } from "vue";

// 1. Create the single toast
const ZToast = defineComponent({
  props: {
    actor: {
      type: Object as PropType<any>,
    },
  },
  setup(props) {
    const [state, send] = useActor(props.actor);
    const apiRef = computed(() =>
      toast.connect(state.value, send, normalizeProps),
    );

    return () => {
      const api = apiRef.value;
      return (
        <div {...api.rootProps}>
          <h3 {...api.titleProps}>{api.title}</h3>
          <p {...api.descriptionProps}>{api.description}</p>
          <button onClick={api.dismiss}>Close</button>
        </div>
      );
    };
  },
});

export default ZToast;
