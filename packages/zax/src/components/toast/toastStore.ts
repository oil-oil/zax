import * as toast from "@zag-js/toast";
import { normalizeProps, useMachine } from "@zag-js/vue";
import { reactive } from "vue";

const [state, send] = useMachine(toast.group.machine({ id: "1" }));
const toastAPI = toast.group.connect(state, send, normalizeProps);
const toastStore = reactive(toastAPI);

export default toastStore;
