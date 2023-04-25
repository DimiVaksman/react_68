import {Field, Formik, ErrorMessage} from 'formik'
import { FormField , Form} from './RecipeFrom.styled';
import * as Yup from 'yup'
import { nanoid } from 'nanoid';

const Schema = Yup.object().shape({
    name: Yup.string().required(),
    image: Yup.string().required(),
    time: Yup.number().required(),
    servings: Yup.number().required(),
    calories: Yup.number().required(),
    difficulty: Yup.string()
    .oneOf(['easy', 'medium', 'hard'])
    .required(),
    
})

export const RecipeForm = ({onSave}) => {
  return (
    <Formik
    initialValues={{
        name: '',
        image: '',
        time: 0,
        servings: 0,
        calories: 0,
        difficulty: 'easy'
        }}
    validationSchema={Schema}

        onSubmit={(values) => {
            onSave({
                ...values,
                id: nanoid()
            })
            console.log(values)
          }}>

    <Form>
      <FormField>
        Name
        <Field type="text" name="name" />
        <ErrorMessage  name="name" components="div"/>
      </FormField>
      <FormField>
        image
        <Field type="text" name="image" />
        <ErrorMessage  name="image" components="div"/>
      </FormField>
      <FormField>
        Time
        <Field type="number" name="time" />
        <ErrorMessage  name="time" components="div"/>
      </FormField>
      <FormField>
        Servings
        <Field type="number" name="servings" />
        <ErrorMessage  name="servings" components="div"/>
      </FormField>
      <FormField>
        Calories
        <Field type="number" name="calories" />
        <ErrorMessage  name="calories" components="div"/>
      </FormField>
      <Field as='select' name='difficulty'>
        <option value='easy'> Easy</option>
        <option value='medium'> Medium</option>
        <option value='hard'> Hard</option>
      </Field>
      <ErrorMessage  name="difficulty" components="div"/>
      <button type="submit">Save recipe</button>
    </Form>
    </Formik>
  );
};



