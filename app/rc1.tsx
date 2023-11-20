import { MyStack } from "../components/MyStack";

import { SimpleRcList } from "./tabs/RcTest";

export default function Rc1() {
  return (
    <MyStack justifyContent="flex-start">
      <SimpleRcList />
    </MyStack>
  );
}
