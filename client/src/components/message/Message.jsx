import "./message.css"

export default function Message({own}) {
  return (
    <div className={own ? "message own" : "message"}>

        <div className="messageTop">
            <img 
            className="messageImg"
            src="https://cdn.pixabay.com/photo/2023/05/19/18/07/bee-8005091_1280.jpg" alt="" />
            <p className="messageText" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices dolor diam, eget scelerisque dui aliquet ut.</p>
        </div>

        <div className="messageBottom">1 hour ago</div>

    </div>
  )
}
