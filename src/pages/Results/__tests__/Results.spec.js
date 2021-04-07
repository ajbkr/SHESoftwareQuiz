import React from "react";
import { Provider } from "react-redux";
import { create } from "react-test-renderer";

import store from "../../../store/store";

import Results from "../Results";

describe("Results page", () => {
  it("renders 0 out of 0", () => {
    const expected = "You answered 0 out of 0 questions correctly.";

    const results = create(
      <Provider store={store}>
        <Results />
      </Provider>
    );
    const p = results.root.findByType("p");

    const actual = p.props.children.join("");

    expect(actual).toBe(expected);
  });
});
