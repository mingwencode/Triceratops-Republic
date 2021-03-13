import React from 'react';
import styled from 'styled-components';
import ReactDom from 'react-dom';

const ModalStyles = styled.div`
  position: fixed;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 50px;
  z-index: 1000;
  box-sizing: border-box;
  border: solid rgba(67, 96, 117, .7) 10px;
`;

const OverlayStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
  z-index: 1000;
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 1.5em;
  color: #344B5B;
  &:focus{
    outline: none;
  }
  &:hover{
    color: #A4BBCB;
    transform: scale(1.5, 1.5);
  }
`;

const Table = styled.table`
  border: 1px solid #dddddd;
  empty-rows: hide;
`;
const TableHeader = styled.th`
  background: #557A95;
  text-align: center;
  color: white;
  padding: 16px;
`;

const TableCol1 = styled.td`
  border-collapse: collapse;
  font-size: 1em;
  text-align: center;
  width: 50em;
  font-family: 'Roboto', sans-serif;
  background-color: #E5E0DC;
  padding: 10px;
`;

const TableCol2 = styled(TableCol1)`
  text-align: center;
  font-size: 1em;
  width: 20em;
  background-color: #8AA7BC;
  font-weight: bold;
  color: #323135;
`;

const Price = styled(TableCol1)`
  font-size: 1.1em;
  font-weight: bold;
`;

const renderTable = (current, compare) => {
  const currentFeatures = current.features.map((item) => (
    item.value !== null ? item.feature : null
  ));
  const compareFeatures = compare.features.map((item) => (
    item.value !== null ? item.feature : null
  ));
  const allFeatures = [...new Set(currentFeatures.concat(compareFeatures))].filter(item => item !== null);

  const tableData = allFeatures.map((feature) => {
    const tempobj = {feature}
    for (let i = 0; i < current.features.length; i += 1) {
      if (current.features[i].feature === feature) {
        if (current.features[i].value === null) {
          tempobj.current = null;
        }
        tempobj.current = current.features[i].value;
      }
    }
    for (let i = 0; i < compare.features.length; i += 1) {
      if (compare.features[i].feature === feature) {
        if (compare.features[i].value === null) {
          tempobj.compare = null;
        }
        tempobj.compare = compare.features[i].value;
      }
    }
    return tempobj;
  });

  return tableData.map((data, index) => (
    <tr key={index}>
      <TableCol1 key="current_col">{data.current}</TableCol1>
      <TableCol2 key="feature_col">{data.feature}</TableCol2>
      <TableCol1 key="compare_col">{data.compare}</TableCol1>
    </tr>
  ));
};

const CompareModal = ({
  isOpenModal, onDismiss, children, currentItem, compare,
}) => {
  if (!isOpenModal) return null;

  return ReactDom.createPortal(
    <>
      <OverlayStyles />
      <ModalStyles>
        <Button name="close-modal" type="button" onClick={() => onDismiss((prev) => !prev)}>&#8855;</Button>
        <Table>
          <thead>
            <tr>
              <TableHeader>{currentItem.name}</TableHeader>
              <TableHeader>                      </TableHeader>
              <TableHeader>{compare.name}</TableHeader>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Price>{`$${currentItem.price}`}</Price>
              <TableCol2>price</TableCol2>
              <Price>{`$${compare.price}`}</Price>
            </tr>
            {renderTable(currentItem, compare)}
          </tbody>
        </Table>

        {children}
      </ModalStyles>
    </>,
    document.getElementById('portal'),
  );
};

export default CompareModal;
