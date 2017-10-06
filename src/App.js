import React, { Component } from 'react';
const $ =require("jquery");
window.jQuery = $;
window.$ = $;
global.jQuery = $;
global.jquery=$;
import ReactSummernote from "react-summernote4";
import "react-summernote4/lang/summernote-ru-RU"; // you can import any other locale 
 
import "bootstrap/dist/css/bootstrap.css"; // you should import bootstrap.css if you haven't done that before 
import "react-summernote4/dist/react-summernote.css";
import "bootstrap/js/dropdown";

class App extends Component {
  componentDidMount() {
    // Here is a quick example if you (really want to) use jQuery
    // with React :)
    setTimeout(() => {
      $(this.refs.intro).slideUp();
    }, 200);
  }
   onChange(content) {
    console.log('onChange', content);
  }

  render() {
    $(".dropdown-toggle").dropdown();
    return (
      <div className="App">
        Hi
     <ReactSummernote
                value="Default value"
                options={{
                    lang: "ru-RU",
                    height: 350,
                    dialogsInBody: true,
                    toolbar: [
                        ["style", ["style"]],
                        ["font", ["bold", "underline", "clear"]],
                        ["fontname", ["fontname"]],
                        ["para", ["ul", "ol", "paragraph"]],
                        ["table", ["table"]],
                        ["insert", ["link", "picture", "video"]],
                        ["view", ["fullscreen", "codeview"]]
                    ]
                }}
                onChange={this.onChange}
            />
      </div>
    );
  }
}

export default App;
