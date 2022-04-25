import { render, screen, cleanup, getByRole } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";
import Gameblocks from "../Gameblocks";

test("should test start score with 0  ", () => {
  render(<Gameblocks />, {
    wrapper: App,
  });
  const score_ele = screen.getByTestId("score_id");
  expect(score_ele).toBeInTheDocument();
  expect(score_ele).toHaveTextContent("Score");
  expect(score_ele).toHaveTextContent("0");
});

//   change those lines for Next tests  test in App.js     **### to success 5 tests not 3 ###
//   const [score, setScore] = useState(10);
//   const [nextBtn, setNextBtn] = useState(true);

// tests depends on changing default state value
test("should test apperience of next btn  ", () => {
  render(<Gameblocks />, {
    wrapper: App,
  });
  const btn_ele = screen.getByRole("button", {
    name: /next/i,
  });
  expect(btn_ele).toBeInTheDocument();
  userEvent.click(btn_ele);
  // should this line fail the test AS WE CLICK ON NEXT BTN
  // expect(btn_ele).toBeInTheDocument();
});

// tests depends on changing default state value
test("should test win screen   ", () => {
  render(<Gameblocks />, {
    wrapper: App,
  });
  const win_ele = screen.getByTestId("win_text");
  expect(win_ele).toBeInTheDocument();
  expect(win_ele).toHaveTextContent("You win!");
});
