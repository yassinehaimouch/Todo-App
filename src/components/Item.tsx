import React from "react";
import Todo from "../models/todo";
import classes from './TodoItem.module.css';

const Item: React.FC<{itemText: Todo["text"]; onRemoveTodo: () => void}> = (
  props
) => {
  return <li className={classes.item} onClick={props.onRemoveTodo}>{props.itemText}</li>;
};

export default Item;
