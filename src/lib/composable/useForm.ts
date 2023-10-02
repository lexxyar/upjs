import {reactive} from "vue";
// @ts-ignore
import cloneDeep from 'lodash.clonedeep'

type FormDataType = object;

interface UpFormProps<TForm extends FormDataType> {
    errors: Partial<Record<keyof TForm, string>>,

    data(): TForm,
}

export type UpForm<TForm extends FormDataType> = TForm & UpFormProps<TForm>

export default function useForm<TForm extends FormDataType>(data: TForm | (() => TForm)): UpForm<TForm> {
    let defaults = typeof data === 'object' ? cloneDeep(data) : cloneDeep(data())
    const form = reactive({
        ...cloneDeep(defaults),
        data(): TForm {
            return (Object.keys(defaults) as Array<keyof TForm>).reduce((carry, key) => {
                carry[key] = this[key]
                return carry
            }, {} as Partial<TForm>) as TForm
        },
        errors: {},
    })
    return form
}
