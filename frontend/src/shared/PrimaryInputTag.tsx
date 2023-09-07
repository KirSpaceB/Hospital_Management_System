interface IPrimaryInputTag {
  placeHolderValue:string,
  inputType:string
}
export default function PrimaryInputTag(props:IPrimaryInputTag) {
  const {placeHolderValue, inputType} = props;
  return (
    <input
      className="sm:w-[345px] sm:h-[54px] bg-white rounded-lg"
      type={inputType} 
      placeholder={placeHolderValue} 
    >
    </input>
  )
}
