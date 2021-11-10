const DataConversion = (data: string) => {
    const splitData = data.split(' ')
    const rightData = splitData[0].split('-')
    return `${rightData[2]}/${rightData[1]}/${rightData[0]}`
}

export default DataConversion