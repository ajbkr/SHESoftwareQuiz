import React from "react";
import { Provider } from "react-redux";
import { act, create } from "react-test-renderer";

import db from "../../../api/db.json";
import store from "../../../store/store";
import { TRIVIA_GENERATE, answerQuestion } from "../../../store/triviaActions";

import Results from "../Results";

describe("Results page", () => {
  it("renders 0 out of 0 when no questions have been loaded", () => {
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

  it("renders 0 out of 10 when no questions have been answered", () => {
    const expected = "You answered 0 out of 10 questions correctly.";

    const results = create(
      <Provider store={store}>
        <Results />
      </Provider>
    );
    const p = results.root.findByType("p");

    act(() => {
      store.dispatch({ type: TRIVIA_GENERATE.BEGIN });
      store.dispatch({
        type: TRIVIA_GENERATE.SUCCESS,
        payload: db.data.results,
      });
    });

    const actual = p.props.children.join("");

    expect(actual).toBe(expected);
  });

  it("renders 1 out of 10 when 1 question has been answered correctly", () => {
    const expected = "You answered 1 out of 10 questions correctly.";

    const results = create(
      <Provider store={store}>
        <Results />
      </Provider>
    );
    const p = results.root.findByType("p");

    act(() => {
      store.dispatch({ type: TRIVIA_GENERATE.BEGIN });
      store.dispatch({
        type: TRIVIA_GENERATE.SUCCESS,
        payload: db.data.results,
      });

      store.dispatch(answerQuestion(0, db.data.results[0].correct_answer));
    });

    const actual = p.props.children.join("");

    expect(actual).toBe(expected);
  });

  it("renders 10 out of 10 when all questions have been answered correctly", () => {
    const expected = "You answered 10 out of 10 questions correctly.";

    const results = create(
      <Provider store={store}>
        <Results />
      </Provider>
    );
    const p = results.root.findByType("p");

    act(() => {
      store.dispatch({ type: TRIVIA_GENERATE.BEGIN });
      store.dispatch({
        type: TRIVIA_GENERATE.SUCCESS,
        payload: db.data.results,
      });

      db.data.results.forEach(({ correct_answer }, index) => {
        store.dispatch(answerQuestion(index, correct_answer));
      });
    });

    const actual = p.props.children.join("");

    expect(actual).toBe(expected);
  });
});
