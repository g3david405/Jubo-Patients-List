import styled from 'styled-components'

export const ContentWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:24px 12px;
`

export const PatientTitle = styled.div`
    font-size:28px;
    font-weight:bold;
    margin:18px 0;
`

export const PatientListWrapper = styled.div`
    width:30vh;
    border:1px solid #f0f0f0;
`

export const DialogWrapper = styled.div`
    min-height:200px;
    min-width:400px;
    p {
      margin-bottom:14px;
    }
`

export const DialogTextarea = styled.textarea.attrs(props => ({
  value:props.value
}))`
    font-size:16px;
    width:95%;
    height:120px;
`
