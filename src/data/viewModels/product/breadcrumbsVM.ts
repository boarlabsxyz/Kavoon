type Breadcrumb = {
  name: string;
  src: string;
};

interface IBreadcrumbs {
  set(name: string, src: string): this;
  build(): { breadcrumbs: Breadcrumb[] };
}

class BreadcrumbsVM implements IBreadcrumbs {
  private breadcrumbs: Breadcrumb[] = [];

  public set(name: string, src: string) {
    this.breadcrumbs.push({ name, src });
    return this;
  }

  public build() {
    return { breadcrumbs: this.breadcrumbs };
  }
}

export default BreadcrumbsVM;
