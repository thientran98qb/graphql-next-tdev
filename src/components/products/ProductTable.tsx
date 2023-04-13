import { Product } from '@/types/product'
import { Alert, Box, Chip, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Loader } from '../Loader'
type ProductProps = {
  data: Product[],
  dataLength: number,
  hasMore: boolean,
  next: () => void
}
const ProductTable = ({data, dataLength, hasMore, next}: ProductProps) => {
  return (
    <TableContainer component={Paper}>
      <InfiniteScroll
        loader={<Loader />}
        next={next}
        dataLength={dataLength}
        hasMore={hasMore}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Product name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Slug</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((product: Product) => (
              product !== null && (<TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                      flexWrap: "wrap"
                    }}
                  >
                    {product.categories.map(category => (
                      <Chip key={category.id} label={category.name} />
                    ))}
                  </Box>
                </TableCell>
                <TableCell>{product.slug}</TableCell>
              </TableRow>)
            ))}
          </TableBody>
        </Table>
        {!dataLength && (
          <Alert severity="info">
            紐付き情報は有りません
          </Alert>
        )}
      </InfiniteScroll>
    </TableContainer>
  )
}

export default ProductTable
