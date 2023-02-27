import { useRouter } from "next/router";
import React from "react";
import { Text } from "vcc-ui";

function LearnPage() {
  const router = useRouter();
  const learnId = router.query.learnId;
  return <Text>Learn more about {learnId}</Text>;
}

export default LearnPage;
