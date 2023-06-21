import kind from "@enact/core/kind";
import { Panels } from "@enact/sandstone/Panels";
import ThemeDecorator from "@enact/sandstone/ThemeDecorator";
import Changeable from "@enact/ui/Changeable";
import PropTypes from "prop-types";

import Detail from "../views/Detail";
import List from "../views/List";

const kittens = ["Garfield", "Nermal", "Simba", "Nala", "Tiger", "Kitty"];

const AppBase = kind({
  name: "App",

  propTypes: {
    index: PropTypes.number,
    kitten: PropTypes.number,
    onNavigate: PropTypes.func,
    onSelectKitten: PropTypes.func,
  },

  defaultProps: {
    index: 0,
    kitten: 0,
  },

  handlers: {
    onSelectKitten: (ev, { onNavigate, onSelectKitten }) => { //이벤트가 발동했을때 나오는 조건들
      if (onSelectKitten) {// 인덱스를 저장한다
        onSelectKitten({
          kitten: ev.index,
        });
      }

      // navigate to the detail panel on selection
      if (onNavigate) {// 패널을 바꾼다
        onNavigate({
          //panel 이동
          index: 1,
        });
      }
    },
  },

  render: ({ index, kitten, onNavigate, onSelectKitten, ...rest }) => (
    <Panels {...rest} index={index} onBack={onNavigate}>
      <List onSelectKitten={onSelectKitten}>{kittens}</List>
      <Detail name={kittens[kitten]} />
    </Panels>
  ),
});

const App = Changeable(
  { prop: "index", change: "onNavigate" },
  Changeable(
    { prop: "kitten", change: "onSelectKitten" },
    ThemeDecorator(AppBase)
  )
);

export default App;
export { App, AppBase };
