const Description = ({ description }) => {
    return (
        <div className='description' dangerouslySetInnerHTML={{ __html: description }} />
    )
}

export default Description;