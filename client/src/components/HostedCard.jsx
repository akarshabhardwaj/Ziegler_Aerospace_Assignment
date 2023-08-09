import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";

const HostedCard = ({ address, price, title, photos, user, _id, fun }) => {
  console.log(fun);
  const HandleDelete = async (id) => {
    console.log(id);
    let data = await fetch(
      `https://airbndserver.onrender.com/property/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: localStorage.getItem("token"),
        },
      }
    );
    let res = await data.json();
    console.log(res);
    alert(res.msg);
    fun();
  };
  // console.log({ address, price, title, photos, user });
  return (
    <Card border={"2px solid black"}>
      <CardBody>
        <img src={photos[0]} alt="" />
        <h2>
          hosted - Mr. {user.name} and contact at {user.email}
        </h2>
        <h2>At {address} </h2>
        <h2>Price - {price}</h2>
        <Button
          onClick={() => {
            HandleDelete(_id);
          }}
        >
          Remove From hosted
        </Button>
      </CardBody>
    </Card>
  );
};

export default HostedCard;
