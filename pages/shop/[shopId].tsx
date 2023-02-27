import { useRouter } from "next/router";
import React from "react";
import { Text } from "vcc-ui";

function ShopPage() {
  const router = useRouter();
  const shopId = router.query.shopId;
  return <Text> Shopping page for {shopId}</Text>;
}

export default ShopPage;
