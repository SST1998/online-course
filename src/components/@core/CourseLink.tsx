// import React from 'react'
import { styled } from '@mui/material';
import { Link } from "react-router-dom";

// interface CoureseLinkProps {
//   path: string
//   children: React.ReactNode
// }

// ** Styled Autocomplete component
const CustomLink = styled(Link)(() => ({
  textDecoration: 'none'
}));

// const CourseLink = ({path, children}: CoureseLinkProps) => {
//   return (
//     <CustomLink to={path}>
//       {children}
//     </CustomLink>
//   )
// }

export default CustomLink

