import Pagination from 'react-bootstrap/Pagination';
import './MyPagination.css';

function MyPagination(props) {
  function createPages() {
    let items = [];
    for (let number = 1; number <= props.pages; number++) {
      items.push(
        <Pagination.Item 
          key={number} 
          active={number === props.active}
          onClick={() => {props.changePage(number)}}>
          {number}
        </Pagination.Item>,
      );
    }
    return items;
  }

  return (
    <Pagination className='justify-content-center pagination'>
      <Pagination.First />
      <Pagination.Prev />
      {createPages()}
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default MyPagination;
