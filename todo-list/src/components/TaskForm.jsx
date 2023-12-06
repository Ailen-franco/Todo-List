import { Flex, Input, Text, Select } from '@chakra-ui/layout'
import { useFormik } from "formik";

export default function TaskForm({ handleSubmit, handleFilterChange }) {
    const formik = useFormik({
        initialValues: {
          task: "",
        },
        validate: (values) => {
          const errors = {};
     
          if (!values.task) {
            errors.task = "Campo requerido";
          } else if (values.task.length > 20) {
            errors.task = "No debe ser mayor a 20 caracteres";
          }
          return errors;
        },
        onSubmit: (values, { resetForm }) => {
          handleSubmit(values.task);
          resetForm();
        },
      });


  return (
    <>
        <Flex justifyContent='center' bgColor='gray.800' my={10}>
            <form onSubmit={formik.handleSubmit}>
                <Input 
                    type="text"
                    placeholder="Ingrese una tarea"
                    name="task"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.task}
                    color='gray.200'>
                </Input>
                <Text color='gray.100' textAlign='center'>
                    {formik.touched.task && formik.errors.task ? formik.errors.task : ""}
                </Text>
                <Select onChange={handleFilterChange} bgColor='gray.800' borderColor='gray.600' color='gray.500' my={5}>
                    <option value="Todas" style={{  color: "darkslategray" }}>Todas</option>
                    <option value="Incompletas" style={{  color: "darkslategray" }}>Incompletas</option>
                    <option value="Completas" style={{  color: "darkslategray" }}>Completas</option>
                </Select>
                <Input
                    type="submit"
                    value="Send"
                    w={20} color='gray.200' cursor='pointer' boxShadow='2xl' ml={65}
                />
            </form>
        </Flex>
    </>
  )
}


