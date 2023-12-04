interface PersonIdxProps{
    index: number
}

function PersonComponent({index}: PersonIdxProps) {
    return (
      <div>
        <input name={"personName" + index} placeholder={"Person " + index} />
        <input name={"personValue" + index} placeholder="$0.00"/>
      </div>
    )
  }

export default PersonComponent;