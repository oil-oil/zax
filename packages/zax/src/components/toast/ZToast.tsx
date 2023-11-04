import * as toast from "@zag-js/toast";
import { normalizeProps, useActor } from "@zag-js/vue";
import { PropType, computed, defineComponent } from "vue";

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
