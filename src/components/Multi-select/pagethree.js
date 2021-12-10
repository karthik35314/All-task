import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./index.css";
export const Pagethree = () => {
  const params = useParams();
  const [bgimage, setbgimage] = useState(null);
  const [boxtwo, setboxtwo] = useState([]);
  const [boxthree, setboxthree] = useState([]);
  const [selected, setselected] = useState([]);
  const [valuecheck, setvaluecheck] = useState(false);
  const [valuechecktwo, setvaluechecktwo] = useState(false);
  const [shiftselect, setshiftselect] = useState(null);
  const [activeindex, setactiveindex] = useState(null)

  // const pushed = [];
  const [first, setfirst] = useState(null);
  const [last, setlast] = useState(null);


  const animals = ["cat", "dog", "donkey", "monkey", "rat", "frog"];
  const handle = (e, name, index, first, last) => {
    // setfirst(index)
    setactiveindex(name)
    setbgimage("");
    e.preventDefault();
    if (e.ctrlKey) {
      setselected([])
      console.log("Ctrl+click has just happened!");
      setselected([...selected, name]);
      setfirst(null)
    }
    if (e.shiftKey) {
      {

        let currArr = [...animals];

        if (first != null && last != null) {
          console.log("one");

          if (index < first) {
            console.log("one");
            const splicedArr = currArr.splice(index, first + 1 - index);
            setfirst(index);
            setlast(first);
            setselected(splicedArr.toString());
            console.log(name);
            return;
          }

          if (index > last || index < last) {
            console.log("three");

            const splicedArr = currArr.splice(first, index + 1 - first);
            setlast(index);
            setselected(splicedArr.toString());
            console.log(name);
            return;
          }
          if (index === first || index === last) {
            console.log("five");
            const splicedArr = currArr.splice(index, 1);
            setfirst(index);
            setlast(index);
            setselected(splicedArr.toString());
            console.log(name);
            return;
          }
        }

        if (first == null && last == null) {
          console.log("dd");
          setfirst(index);
          console.log(name);
          // const splicedArr = currArr.splice(0, index);
          // setselected(splicedArr)
          return;
        }

        if (first && !last) {
          console.log("dfgfd");
          const splicedArr = currArr.splice(first, index + 1 - first);
          setlast(index);
          setselected(splicedArr.toString());
          console.log(name);
          return;
        }
      }
    }
  };

  const status = (e) => {
    //box3
    setvaluecheck(!valuecheck);
  };
  const statustwo = (e) => {
    //box2
    setvaluechecktwo(!valuechecktwo);
  };

  const pastetwo = () => {
    // console.log(selected);
    setboxtwo([...boxtwo, selected]);
    console.log(boxtwo, "boxtwo");
  };

  const pastethree = () => {
    setboxthree([...boxthree, selected]);
  };

  const reset = () => {
    setselected([]);
    setfirst(null)
    setlast(null)
    setbgimage("");
    setactiveindex(null)
  };
  console.log(shiftselect, "shitselect");

  console.log(selected, "selected");

  return (
    <div >
      <h1> welcome {`${params.name}`}</h1>

      <div className="row">
        <div className="col-4">{/* <button>copy</button> */}</div>
        {/* <div className="col-4"></div> */}
        <div className="col-4">{/* <button>paste</button> */}</div>
      </div>
      <div className="container-fluid d-flex" style={{ width: "82%" }}>
        <div
          className="container bgimg pt-3 mt-3"
          style={{ backgroundImage: `url(${bgimage})`, width: "55%" }}
        >
          <span>
            {" "}
            <br />
          </span>{" "}
          {animals.map((d, index) => {
            return (
              <ul
                className="text-center "
                style={{ width: "10%", marginLeft: "44%", color: "red" }}
                key={index}
              >
                <li>
                  <span
                    onClick={(e) => handle(e, d, index, first, last)}
                    name={d}
                    className={selected?.includes(d) || activeindex?.includes(d) ? "active" : null}
                  >
                    {d}
                  </span>
                </li>
              </ul>
            );
          })}
          <button onClick={reset}> clear</button>
        </div>

        <div className="container">
          <span>
            {" "}
            <input
              type="checkbox"
              name="box-two"
              checked={valuechecktwo}
              onChange={(e) => {
                statustwo(e);
              }}
            />{" "}
          </span>{" "}
          <h1>animals-two</h1>
          {valuechecktwo ? (
            <>
              <button
                onClick={(event) => {
                  pastetwo(event);
                }}
              >
                paste
              </button>

              <ul
                className="p-0 text-center"
                style={{ width: "10%", marginLeft: "44%" }}
              >
                {boxtwo?.map((data) => {
                  console.log(data, "haha");
                  return <li>{data} </li>;
                })}
              </ul>
            </>
          ) : null}
        </div>
        <div className="container">
          <span>
            {" "}
            <input
              type="checkbox"
              checked={valuecheck}
              onChange={(e) => {
                status(e);
              }}
            />{" "}
          </span>{" "}
          <h1>animals</h1>
          {valuecheck ? (
            <>
              <button onClick={pastethree}>paste</button>

              {boxthree?.map((data) => {
                return (
                  <ul
                    className="p-0 text-center"
                    style={{ width: "10%", marginLeft: "29%" }}
                  >
                    <li>{data} </li>
                  </ul>
                );
              })}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};
