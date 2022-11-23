<div class="container">
    <h1>WEB TECHNOLOGIES(OnClick event is on Show/Hide Button)</h1>
    <p id="para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis commodi architecto consectetur molestias maiores sed nesciunt odit, hic fugiat iure labore iste provident delectus ex modi sunt accusantium tempore et voluptatibus omnis molestiae quisquam soluta! Earum eius placeat autem eum voluptatem natus iure. Asperiores, minus. Nostrum consectetur incidunt officiis? Aut, facere laborum veniam natus cumque a quisquam, amet culpa atque distinctio omnis exercitationem error quos dolorum ea voluptatum? Illo ipsum numquam dolores earum officia labore sint vel magnam nemo, quas a doloribus quibusdam aliquid reiciendis temporibus error provident culpa deleniti minima, perspiciatis tenetur explicabo? Est pariatur amet porro enim ratione possimus molestiae. Iure, necessitatibus dignissimos repudiandae consequatur dolores soluta obcaecati voluptates dolorem distinctio cupiditate! Culpa eos debitis praesentium sed corporis, voluptas, ipsam quidem, ipsa magni dolor et? Repellat consectetur dolorum sapiente molestias at, earum ex sint laboriosam culpa. Illum soluta aspernatur aliquid impedit molestiae adipisci magni vel consequatur eaque omnis dolore molestias fugiat laboriosam, ipsum a quibusdam atque similique odio asperiores deserunt harum libero perspiciatis! Delectus consequatur vero quaerat perspiciatis sapiente, rem non ad voluptatibus, commodi eos numquam est voluptas incidunt magni. Magni odio eligendi reiciendis facere minus natus eveniet placeat delectus veritatis. Sed corporis voluptatem nulla porro dolor excepturi eos autem quos. Sed excepturi culpa quo sit ducimus odio, nulla pariatur tempore fugiat atque incidunt iusto a asperiores inventore provident cum cumque d oloribus sint rem id totam dignissimos doloremque aut? Commodi, laudantium?</p>
</div>
<button id="btn" onclick="toggleHide()">
    SHOW/HIDE
</button>
<script>
                let para = document.getElementById('para')
                para.addEventListener('mouseover', function run(){
                    console.log("Mouse is Inside the paraGarpah");
                });
                para.addEventListener('mouseout', function run(){
                    console.log("Mouse is outside the paraGarpah");
                });
                




    function toggleHide(){
        let btn = document.getElementById('btn');
        let para = document.getElementById('para')
        if(para.style.display != 'none'){
            para.style.display = 'none';
        }
        else{
            para.style.display = 'block';
        }
    }
</script>
