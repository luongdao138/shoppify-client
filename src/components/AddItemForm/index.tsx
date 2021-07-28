import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  ButtonWrapper,
  CategoryItem,
  CategoryWrapper,
  FormGroup,
  Input,
  Label,
  Textarea,
  Title,
  Wrapper,
} from './AddItemForm.styles';
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { getAllCategories } from '../../features/categorySlice';
import { useAppSelector } from '../../app/hooks';
import useEventListener from '../../hooks/useEventListener';
import { addProduct } from '../../features/productSlice';

interface Props {
  setOpenAddFormModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface FormState {
  name: string;
  image: string;
  note: string;
  category: string;
}

const initialFormState: FormState = {
  category: '',
  name: '',
  image: '',
  note: '',
};

const AddItemForm = ({ setOpenAddFormModal }: Props) => {
  const [values, setValues] = useState<FormState>(initialFormState);
  const { list } = useAppSelector((state) => state.category);

  const handleCloseAddForm = (): void => {
    setValues(initialFormState);
    setOpenAddFormModal(false);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddItem = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(addProduct(values));

    setValues(initialFormState);
    setOpenAddFormModal(false);
  };

  return (
    <Wrapper>
      <Title>Add a new item</Title>
      <form onSubmit={handleAddItem}>
        <FormGroup>
          <Label>Name</Label>
          <div className='input'>
            <Input
              placeholder='Enter a name'
              onChange={handleChange}
              value={values.name}
              name='name'
            />
            <MdClose />
          </div>
        </FormGroup>
        <FormGroup>
          <Label>Note (optional)</Label>
          <Textarea
            placeholder='Enter a note'
            onChange={handleChange}
            value={values.note}
            name='note'
          />
        </FormGroup>
        <FormGroup>
          <Label>Image (optional)</Label>
          <div className='input'>
            <Input
              placeholder='Enter a url'
              onChange={handleChange}
              value={values.image}
              name='image'
            />
            <MdClose />
          </div>
        </FormGroup>
        <FormGroup>
          <Label>Category</Label>
          <div className='input'>
            <Input
              placeholder='Enter a category'
              onChange={handleChange}
              value={values.category}
              name='category'
            />
            <MdClose />
            <CategoryWrapper>
              {list.filter((c) => c.name.includes(values.category)).length ===
              0 ? (
                <p
                  style={{
                    textAlign: 'center',
                    margin: '20px  0',
                    fontSize: '14px',
                    fontWeight: 500,
                  }}
                >
                  No options
                </p>
              ) : (
                list
                  .filter((c) => c.name.includes(values.category))
                  .map((c) => (
                    <CategoryItem
                      onClick={() => {
                        setValues({
                          ...values,
                          category: c.name,
                        });
                      }}
                      key={c._id}
                    >
                      {c.name}
                    </CategoryItem>
                  ))
              )}
            </CategoryWrapper>
          </div>
        </FormGroup>
        <ButtonWrapper>
          <button className='cancel' type='button' onClick={handleCloseAddForm}>
            Cancel
          </button>
          <button className='save' type='submit'>
            Save
          </button>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
};

export default AddItemForm;
