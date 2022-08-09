import { useState } from 'react';
import { ImUserPlus } from 'react-icons/im';
import { useSelector } from 'react-redux';
// import userOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import Section from 'components/Section/Section';
import PhoneForm from 'components/PhoneForm/PhoneForm';
import ContactList from 'components/ContactList/ContactList';
import FilterContacts from 'components/FilterContacts/FilterContacts';

const PhoneBook = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector(authSelectors.getIsLOggedIn);

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  if (!isLoggedIn) {
    return (
      <>
        <Navigate to="/" replace />
      </>
    );
  }

  return (
    <>
      <Section title="Phonebook" textAlign="center">
        <Button type="button" onClick={toggleModal}>
          <ImUserPlus size={18} /> Add Contact
        </Button>
        {isOpen && (
          <Modal closeModal={toggleModal}>
            <PhoneForm onSaveAndClose={toggleModal} />
          </Modal>
        )}
      </Section>

      <Section title="Find contacts by name" textAlign="center">
        <FilterContacts />
      </Section>

      <Section title="Contacts" textAlign="center">
        <div style={{ position: 'relative' }}>
          {isLoggedIn ? (
            <ContactList />
          ) : (
            <h3 style={{ color: 'blue' }}>Phone book is empty</h3>
          )}
        </div>
      </Section>
    </>
  );
};

export default PhoneBook;

// const App = () => {
//   const dispatch = useDispatch();
//   const phoneContacts = useSelector(contactsSelectors.getItems)
//   const isLoading = useSelector(contactsSelectors.getLoading)
//   const error = useSelector(state => state.contacts.error)

//   useEffect(() => {
//     dispatch(fetchAllContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <Container>
//         <Section title="Phonebook">
//           <PhoneForm />
//         </Section>

//         <Section title="Find contacts by name">
//           <FilterContacts />
//           {error && <h1 style={{color:"red"}}>{`Sorry, ${error}`}</h1>}
//         </Section>

//         {isLoading && <h2>Loading...</h2>}

//         {phoneContacts.length > 0 ? <Section title="Contacts">

//           <ContactList />
//         </Section> : <Section title="Phone book is empty" />}
//       </Container>
//       <ToastContainer autoClose={3000} theme="colored" pauseOnHover />
//     </div>
//   );
// };

// export default App;
