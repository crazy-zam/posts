import MyButton from '../../UI/MyButton';

const PagesBar = ({ pages, setPostPagination, postPagination }) => {
  const changePage = (e) => {
    setPostPagination({ ...postPagination, page: e.target.id });
  };
  return (
    <>
      {pages.map((page) => (
        <MyButton onClick={changePage} id={page} key={page}>
          {page}
        </MyButton>
      ))}
    </>
  );
};

export default PagesBar;
