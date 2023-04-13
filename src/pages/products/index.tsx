import { Loader } from "@/components/Loader";
import FilterProduct from '@/components/products/FilterProduct';
import ProductTable from '@/components/products/ProductTable';
import { GET_PRODUCT_CONNECTIONS } from "@/models/products/query";
import { useQuery } from "@apollo/client";
import { Box, Typography } from '@mui/material';
import { SyntheticEvent, useEffect, useMemo, useState } from 'react';

const productQuery = {
  id: ""
}
type ProductQuery = typeof productQuery
const ProductPage = () => {
  const [query, setQuery] = useState<ProductQuery>(productQuery)
  const {loading, error, data, fetchMore, refetch} = useQuery(GET_PRODUCT_CONNECTIONS, {
    variables: productQuery
  })
  const products = useMemo(
    () => {
      console.log(data);

      return (data?.productsConnection?.edges?.map((e: any) => e?.node ?? null)) ?? []
    },
    [data]
  )

  const handleChangeOption = (
    _: SyntheticEvent,
    value: any
  ) => {
    setQuery((prevState) => ({
      ...prevState,
      id: value || ""
    }));
  }

  useEffect(() => {
    refetch(query);
  }, [query]);

  if (loading) return <Loader fullHeight/>
  return (
    <Box>
      <Typography>Product lists</Typography>
      <FilterProduct
        handleChangeOption={handleChangeOption}
      />
      <ProductTable
        dataLength={data?.productsConnection?.edges?.length ?? 0}
        hasMore={data?.productsConnection?.pageInfo?.hasNextPage ?? false}
        next={() => {
          console.log(13123);

          fetchMore({
            variables: {
              after: data?.productsConnection?.pageInfo?.endCursor,
            }
          })
        }}
        data={products}
      />
    </Box>
  )
}

export default ProductPage
