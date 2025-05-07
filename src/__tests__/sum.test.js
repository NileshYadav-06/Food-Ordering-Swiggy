import {sum} from "../components/sum";

test("testing sum",()=>{
    const result = sum(2,3);

    expect(result).toBe(5);
})