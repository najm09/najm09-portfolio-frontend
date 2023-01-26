import { SKILLS_DETAILS } from "../../Constants/data"
import { Table, TableRow, TableCell, Grid } from "@mui/material"
import { Chip } from "@mui/material"
const Skills = () => {

  return (
    <div>
      <Table>
        <TableRow>
          <TableCell>
            <Chip label='Primary Skills' variant='filled' color="primary" />
          </TableCell>
          <TableCell>
            <Grid justifyContent='space-evenly'>
              {SKILLS_DETAILS.primary_skills.map((skill) => (
                <Chip label={skill} variant='outlined' color="primary" />
              ))}
            </Grid>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Chip label='Programming Languages' variant='filled' color="secondary" />
          </TableCell>
          <TableCell>
            {SKILLS_DETAILS.programming_languages.map((skill) => (
              <Chip label={skill} variant='outlined' color="secondary" />
            ))}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Chip label='Web Technologies' variant='filled' color="info" />
          </TableCell>
          <TableCell>
            {
              SKILLS_DETAILS.web_technologies.map((skill) => (
                <Chip label={skill} variant='outlined' color="info" />
              ))
            }
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Chip label='Cloud Technologies' variant='filled' color="error" />
          </TableCell>
          <TableCell>{
            SKILLS_DETAILS.cloud_technologies.map((skill) => (
              <Chip label={skill} variant='outlined' color="error" />
            ))}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Chip label='Database' variant='filled' color="secondary" />
          </TableCell>
          <TableCell>

            {SKILLS_DETAILS.database.map((skill) => (
              <Chip label={skill} variant='outlined' color="secondary" />
            ))}
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Chip label='Other Tools' variant='filled' color="success" />
          </TableCell>
          <TableCell>
            {SKILLS_DETAILS.other_tools.map((skill) => (
              <Chip label={skill} variant='outlined' color="success" />
            ))}
          </TableCell>
        </TableRow>
      </Table>
    </div >
  )
}
export default Skills