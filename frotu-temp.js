

async function addFrotuISTemp() {
    const { value: v } = await Swal.fire({
    title: "Enter Frotu Input",
    html:
    `<input id="a" type="number" class="swal2-input" placeholder="Amount"><br><br>` +
    `<select id="c" class="swal2-input">
    <option value="">Select Category</option>
    <option value="free">Free</option>
    <option value="reward">Rewards / Refunds </option>
    <option value="passive"> Passive Income / Divident </option>
    <option value="unknown"> Unknown </option>
    <option value="overtime"> Over Time </option>
    <option value="other"> Others </option>
    </select><br><br>` +
    `<input id="d" type="date" class="swal2-input"><br><br>` +
    `<input id="ds" class="swal2-input" placeholder="Description">`,
    focusConfirm: false,
    preConfirm: () => {
    let a = document.getElementById("a").value;
    let c = document.getElementById("c").value;
    let d = document.getElementById("d").value;
    let ds = document.getElementById("ds").value.replace(/<\/?[^>]+(>|$)/g, "");
    if (!a || !c || !d || !ds) return Swal.showValidationMessage("All fields required");
    return { a, c, d, ds };
    }
    });
    if (v){ 
    
    let sa=`
    <td> ${v.a}</td> <td>${v.d}</td> <td> ( ${v.c} ) ${v.ds} </td>
    `;
    
    let nee= document.createElement("tr");
    nee.className=v.c;
    nee.innerHTML=sa;
    nee.onclick= function(){
    remFrotuIS(this)
    };
    
    let xxx={ele:nee,newVal:v.a};
    Swal.fire({
    title:"Record Added Successfully",
    icon:"success"
    });
    return xxx;
    };
}