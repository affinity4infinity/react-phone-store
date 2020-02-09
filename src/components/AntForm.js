import React, { useState } from "react";
import { Form, Icon, Input, Button, Checkbox, AutoComplete } from "antd";
import axios from "axios";

function AntForm() {
  const [state, setState] = useState({
    value: "",
    dataSource: []
  });

  function onSelect(value) {
    console.log("onSelect", value);
  }

  const onSearch = searchText => {
    !searchText
      ? setState({ ...state, dataSource: [] })
      : axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then(res => {
            let result = [];

            result = res.data.map(post => {
              //@ check if the result contains the search string entered by user
              if (post.title.indexOf(searchText) >= 0) {
                return post.title;
              } else return null;
            });

            setState({
              ...state,
              dataSource: result.filter(e => e !== null) //exclude the null values in dataSource array
            });
          })
          .catch(error => console.log(error));
  };

  const onChange = e => {
    setState({ ...state, value: e.target.value });
  };

  const { value, dataSource } = state;
  return (
    <div>
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 200 }}
        onSelect={onSelect}
        onSearch={onSearch}
        placeholder="input here"
      />
    </div>
  );
}

export default AntForm;
