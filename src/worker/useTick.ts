import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Dispatch, AnyAction } from "redux";
import Ticker from "./ticker.worker";

const TickerWorker: Worker = new (Ticker as any)();

type RegisterAction = (
  dispatch: Dispatch,
  action: AnyAction,
  milliseconds: number
) => () => void;

const registerAction: RegisterAction = (
  dispatch,
  action,
  milliseconds
) => () => {
  dispatch(action);

  const callBack = async (event: any) => {
    if (event.data === milliseconds) {
      dispatch(action);
    }
  };

  TickerWorker.addEventListener("message", callBack);

  return () => TickerWorker.removeEventListener("message", callBack);
};

export const useTick = (actionCreator: any, milliseconds: number) => {
  const dispatch = useDispatch();

  useEffect(registerAction(dispatch, actionCreator, milliseconds), []);
};
