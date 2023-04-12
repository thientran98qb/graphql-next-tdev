import { Product } from '@/types/product'
import { Box, Chip, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
type ProductProps = {
  data: Product[]
}
const ProductTable = ({data}: ProductProps) => {
  return (
    <TableContainer>
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
            <TableRow key={product.id}>
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ProductTable
