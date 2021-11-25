const cards = [
    {
        id: 1,
        name: "Jakub Maziarz",
        job: "web developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae delectus error fugiat hic ipsam magni " +
            "modi nisi officiis quidem tempora! Alias amet at beatae consequatur excepturi, exercitationem qui saepe " +
            "vel? Aut eos esse maiores minima minus quidem quis quod vel voluptatibus? Adipisci alias animi, aspernatur " +
            "atque beatae dolor dolorem error fuga impedit iste libero neque nobis nostrum nulla odit perspiciatis " +
            "placeat praesentium provident quaerat quibusdam quod repellat reprehenderit sunt tempora velit voluptas " +
            "voluptatum. Adipisci aut earum enim exercitationem, fugit hic illum inventore magni, natus numquam " +
            "obcaecati placeat quod sequi sit soluta tempore voluptate. Aut cupiditate deleniti dolor, harum omnis saepe.",
    },
    {
        id: 2,
        name: "Paul Molongo",
        job: "web designer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam fugiat in laborum minima minus mollitia " +
            "numquam quo ut velit? Beatae delectus dolor dolorum eius et fugiat fugit illo itaque iusto magni molestiae " +
            "officiis, quas quis sed similique vero, vitae. At culpa delectus error hic labore modi perferendis quaerat " +
            "quis repellendus sed, similique sunt totam veniam voluptate voluptatum? Aperiam aut culpa cum cupiditate " +
            "dolorem doloribus dolorum enim est et eveniet fuga fugit incidunt iste iure iusto magnam magni modi " +
            "molestias natus neque nulla perspiciatis placeat porro quasi qui quod recusandae, reiciendis rem soluta " +
            "tempora tempore ullam ut vero? Nam, totam, vero?",
    },
    {
        id: 3,
        name: "Sebastian Maziaritto",
        job: "the boss",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi illo iure non perspiciatis quod " +
            "repellendus ullam vel! Accusamus earum iure labore rerum ullam? Ab doloribus ea eaque in nesciunt quo " +
            "repudiandae totam! Ab accusamus amet asperiores assumenda commodi corporis cupiditate dignissimos ducimus " +
            "explicabo fugiat id ipsum iste laborum modi molestias, natus nemo nobis non quidem quis quisquam quos " +
            "reprehenderit saepe sunt tempora ullam, unde veniam. Alias asperiores delectus dolore doloremque ducimus " +
            "ea eaque eligendi eveniet, facilis fuga illo iste molestiae nemo nobis quibusdam quisquam repellendus " +
            "repudiandae saepe sapiente sint suscipit ut velit veniam! Consectetur delectus eos modi quaerat qui?",
    },
    {
        id: 4,
        name: "Konrad Stachowicz",
        job: "intern",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cupiditate eligendi error facere " +
            "minus modi nemo quo! Accusamus animi, corporis itaque nesciunt saepe tempora tenetur vel vero. Accusamus " +
            "at dignissimos dolore esse est incidunt ipsum iure magni nam necessitatibus, non numquam odit optio placeat " +
            "praesentium repudiandae sit, tenetur ut vitae voluptatibus. Adipisci atque eos illum incidunt minus quia quo " +
            "sapiente soluta. Aliquid consequuntur nam necessitatibus, reprehenderit tempora tempore ut voluptatibus? " +
            "Architecto blanditiis consequatur eum ipsam voluptatem. Accusamus atque consequuntur, cumque, deserunt " +
            "dicta earum eligendi expedita fugiat harum illum nobis non officia perferendis quos recusandae, saepe " +
            "sapiente sed sequi similique ut?",
    },
    {
        id: 5,
        name: "John Tao",
        job: "junior web developer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolor, dolorem eaque earum eius eos esse " +
            "expedita harum illo illum inventore ipsum laudantium magnam nemo nostrum numquam officia officiis placeat " +
            "quae quisquam recusandae similique sit tenetur? Doloribus ea exercitationem ipsam laborum odit qui, quod " +
            "reiciendis similique temporibus. Accusantium animi asperiores aspernatur aut debitis deleniti ea, eaque " +
            "eligendi eos error, eum exercitationem facilis fuga fugiat impedit inventore iure labore nam natus nesciunt " +
            "nobis non nostrum nulla officia quae quam qui quidem quos recusandae reiciendis sit soluta tempora totam " +
            "veniam veritatis voluptas voluptate! Aliquam asperiores aspernatur ea id quis temporibus velit? Eveniet.",
    },
    {
        id: 6,
        name: "Tomasz Witkowski",
        job: "junior web designer",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab animi aperiam architecto aspernatur, commodi " +
            "consectetur cum doloribus ducimus enim et fugit minima mollitia provident quasi qui quis saepe totam! " +
            "Corporis labore maxime, optio provident quaerat ratione saepe totam vel? Animi architecto aspernatur " +
            "consectetur consequuntur debitis dolor dolorem dolores doloribus error facere fugit, maiores quia rem " +
            "repellendus temporibus. Adipisci beatae corporis delectus dicta doloribus iure laboriosam non nostrum quae " +
            "unde! Consequatur dolorem eos labore molestias optio repellendus ut vero vitae voluptatum! Ad, commodi " +
            "consequatur culpa debitis deserunt dolorem esse fugit officiis pariatur placeat praesentium quo rem " +
            "reprehenderit rerum, totam veritatis voluptatem.",
    }
];

const name = document.getElementById("name");
const job = document.getElementById("job");
const image = document.getElementById("image");
const text = document.getElementById("text");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const rand = document.getElementById("random");

let curr = 0;

window.addEventListener("DOMContentLoaded", () => {
    const item = cards[curr];
    image.src = image.src + "?t=" + new Date().getTime();
    name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
})

function showPerson(person) {
    const item = cards[person];
    image.src = image.src + "?t=" + new Date().getTime();
    name.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}

next.addEventListener("click", () => {
    curr++;
    if (curr >= cards.length) {
        curr = 0;
    }
    showPerson(curr);
})

prev.addEventListener("click", () => {
    curr--;
    if (curr < 0) {
        curr = cards.length - 1;
    }
    showPerson(curr);
})

rand.addEventListener("click", () => {
    curr = Math.floor(Math.random() * cards.length);
    showPerson(curr);
})