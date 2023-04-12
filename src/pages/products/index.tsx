import ProductTable from '@/components/products/ProductTable'
import { Autocomplete, Box, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'
import { Loader } from "@/components/Loader";
import { GET_PRODUCTS, GET_PRODUCT_CONNECTIONS } from "@/models/products/query"
import { useQuery } from "@apollo/client"
import { GET_CATEGORIES } from '@/models/categories/query';
import { Category } from '@/types/category';

const productQuery = {
  id: ""
}
type ProductQuery = typeof productQuery
const ProductPage = () => {
  const [query, setQuery] = useState<ProductQuery>(productQuery)
  const {loading, error, data, refetch} = useQuery(GET_PRODUCT_CONNECTIONS, {
    variables: query
  })
  const {loading: categoriesLoading, error: errorCategories, data: dataCategories} = useQuery(GET_CATEGORIES)

  useEffect(() => {
    refetch(query);
  }, [query]);

  const products = useMemo(
    () => (data?.productsConnection?.edges?.map((e: any) => e?.node ?? null)) ?? [],
    [data]
  )

  if (loading) return <Loader fullHeight/>
  console.log(data);
  return (
    <div>
      <Typography>Product lists</Typography>
      <Autocomplete
        id="combo-box-demo"
        autoHighlight
        options={dataCategories?.categories ?? []}
        loading={categoriesLoading}
        getOptionLabel={(option: Category) => option?.name}
        renderOption={(props, option: Category) => (
          <Box component="li" {...props}>
            {option?.name}
          </Box>
        )}
        onInputChange={(event, valueInput) => {

        }}
        onChange={(event, valueOption) => {
          console.log(valueOption);
          setQuery({
            id: valueOption?.id || ""
          })
        }}
        renderInput={(params) => <TextField {...params} label="Category" />}
        sx={{
          py: 2,
          width: "300px"
        }}
      />
      <ProductTable
        data={products}
      />
    </div>
  )
}

export default ProductPage
