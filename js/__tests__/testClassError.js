import ErrorRepository from "../classErrorRepository";

test("нахождение имеющейся ошибки", () => {
    const errRepo = new ErrorRepository();
    expect(errRepo.translate(404)).toBe("Not found");
})

test("Нахождение отстутсвующей ошибки", () => {
    const errRepo = new ErrorRepository();
    expect(errRepo.translate(4040)).toBe("Unknown error")
})

test("Добавление ошибки", () => {
    const errRepo = new ErrorRepository();
    errRepo.addError(343, "turn of")
    expect(errRepo.codeErrors.get(343)).toBe("turn of");
})