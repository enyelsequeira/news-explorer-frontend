/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-indent */
import React, { useState, useRef, useEffect } from 'react';

const SearchForm = (props) => {
  const [keyword, setKeyword] = useState('');
  const [valid, setValid] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (keyword.trim().length > 0) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [keyword]);

  const submitForm = (e) => {
    e.preventDefault();

    if (valid) {
      props.onSubmit(keyword);
    }
  };

  return (
    <form className="search" onSubmit={submitForm}>
      <input
        ref={inputRef}
        placeholder="Enter topic"
        className="search__input"
        onChange={({ target }) => setKeyword(target.value)}
        disabled={props.isLoading}

      />
      { !valid && (
        <span
          id={`${props.name}-error`}
          className="form__input-error form__input-error_visible"
        >
          Please enter a keyword
        </span>
      )}

      <button type="submit" className={`button search__button ${props.isLoading || !valid ? 'search__button_disabled' : ''} `} disabled={props.isLoading || !valid}>Search</button>

    </form>
  );
};

export default SearchForm;

// Better way to do validation, Need to implement like this after review

// import React from 'react';
// import { useForm } from 'react-hook-form';

// const SearchForm = (props) => {
//   const {
//     register, handleSubmit, errors, formState: { isSubmitting },
//   } = useForm();

//   const onSubmit = (data) => {
//     props.onSubmit(data.search);
//     setTimeout(1000);
//   };

//   return (
//     <form className="search" onSubmit={handleSubmit(onSubmit)}>
//       <input name="search" placeholder="Enter topic" className="search__input" ref={register({ required: true, minLength: 3 })} disabled={isSubmitting} />
//       {errors.search && (
//         <span className="form__input-error form__input-error_visible">
//           Please enter a keyword
//         </span>
//       )}
//       <input className={`button search__button ${!errors.search ? '' : 'search__button_disabled'}`} disabled={isSubmitting} type="submit" value="Search" />
//     </form>
//   );
// };

// export default SearchForm;
