import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HostedCard from "./HostedCard";

const HostedAll = ({ allprop, fun }) => {
  console.log(fun);
  return (
    <div>
      <SimpleGrid minChildWidth={"250px"} spacing={70} padding={"8%"}>
        {allprop?.map((el, index) => {
          return (
            <HostedCard
              key={index}
              _id={el._id}
              address={el.address}
              price={el.price}
              title={el.title}
              photos={el.photos}
              user={el.user}
              fun={fun}
            />
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default HostedAll;
