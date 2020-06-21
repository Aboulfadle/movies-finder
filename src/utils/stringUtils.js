const slice = (text, limit) => {
    return text.length <= limit ? text : text.slice(0, limit-3) + '...';
}

export default slice;