import { GET_CATEGORIES } from '@/models/categories/query'
import { Category } from '@/types/category'
import { useQuery } from '@apollo/client'
import { Autocomplete, Box, TextField } from '@mui/material'
import React, { SyntheticEvent } from 'react'

type Props = {
  handleChangeOption: (_: SyntheticEvent,
    value: any) => void
}

const FilterProduct = ({handleChangeOption}: Props) => {
  const {loading: categoriesLoading, error: errorCategories, data: dataCategories} = useQuery(GET_CATEGORIES)
  return (
    <Autocomplete
      id="combo-box-demo"
      options={dataCategories?.categories ?? []}
      loading={categoriesLoading}
      getOptionLabel={(option: Category) => {
        return option.name
      }}
      renderOption={(props, option: Category) => (
        <Box component="li" {...props}>
          {option?.name}
        </Box>
      )}
      onChange={(_e, value) => {
        handleChangeOption(_e, value?.id);
      }}
      renderInput={(params) => <TextField {...params}  label="Category" />}
      sx={{
        py: 2,
        width: "300px"
      }}
    />
  )
}

export default FilterProduct
