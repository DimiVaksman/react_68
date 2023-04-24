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
    defficulty: Yup.string()
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
        defficulty: 'easy'
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
      <Field as='select' name='defficulty'>
        <option value='easy'> Easy</option>
        <option value='medium'> Medium</option>
        <option value='hard'> Hard</option>
      </Field>
      <ErrorMessage  name="defficulty" components="div"/>
      <button type="submit">Save recipe</button>
    </Form>
    </Formik>
  );
};



const RecipeSchema = Yup.object().shape({
    name: Yup.string().required('Required field!'),
    image: Yup.string().required('Required field!'),
    time: Yup.number().positive('Must be >0!').required('Required field!'),
    servings: Yup.number().positive('Must be >0!').required('Required field!'),
    calories: Yup.number().positive('Must be >0!').required('Required field!'),
    difficulty: Yup.string()
      .oneOf(['easy', 'medium', 'hard'])
      .required('Required field!'),
  });
  
//   export const RecipeForm = ({ onSave }) => {
//     return (
//       <Formik
//         initialValues={{
//           name: '',
//           image: '',
//           time: 0,
//           servings: 0,
//           calories: 0,
//           difficulty: 'easy',
//         }}
//         validationSchema={RecipeSchema}
//         onSubmit={(values, actions) => {
//           onSave({ ...values, id: nanoid() });
//           actions.resetForm();
//         }}
//       >
//         <Form>
//           <FormField>
//             Name
//             <Field name="name" />
//             <ErrorMessage name="name" component="div" />
//           </FormField>
//           <FormField>
//             Image
//             <Field name="image" />
//             <ErrorMessage name="image" component="div" />
//           </FormField>
//           <FormField>
//             Time
//             <Field type="number" name="time" />
//             <ErrorMessage name="time" component="div" />
//           </FormField>
//           <FormField>
//             Servings
//             <Field type="number" name="servings" />
//             <ErrorMessage name="servings" component="div" />
//           </FormField>
//           <FormField>
//             Calories
//             <Field type="number" name="calories" />
//             <ErrorMessage name="calories" component="div" />
//           </FormField>
//           <FormField>
//             Difficulty
//             <Field as="select" name="difficulty">
//               <option value="easy">Easy</option>
//               <option value="medium">Medium</option>
//               <option value="hard">Hard</option>
//             </Field>
//             <ErrorMessage name="difficulty" component="div" />
//           </FormField>
//           <button type="submit">Save recipe</button>
//         </Form>
//       </Formik>
//     );
//   };