(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-portfolio-portfolio-module"], {
    /***/
    "2q3y":
    /*!************************************************!*\
      !*** ./src/assets/data/portfolio-particles.ts ***!
      \************************************************/

    /*! exports provided: particlesConfig */

    /***/
    function q3y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "particlesConfig", function () {
        return particlesConfig;
      });

      var particlesConfig = {
        particles: {
          number: {
            value: 85,
            density: {
              enable: true,
              value_area: 500
            }
          },
          color: {
            value: '#ff9932'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: 'img/github.svg',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 1,
            random: false,
            anim: {
              enable: false,
              speed: 40,
              size_min: 1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ff9932',
            opacity: .8,
            width: 1
          },
          move: {
            enable: true,
            speed: .5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'bounce',
            bounce: true,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'repulse'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.5
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      };
      /***/
    },

    /***/
    "4knr":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/portfolio/components/projects/projects.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: ProjectsComponent */

    /***/
    function knr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
        return ProjectsComponent;
      });
      /* harmony import */


      var _shared_models_portfolio_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @shared/models/portfolio.model */
      "oFHo");
      /* harmony import */


      var _components_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../components/portfolio-modal/portfolio-modal.component */
      "Re8Q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/portfolio.service */
      "t+KS");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function ProjectsComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_li_14_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var skill_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.filterProjectsBySkills(skill_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skill_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.getSkillItemClass(skill_r2));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", skill_r2.name, "\xA0");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", skill_r2.count, ")");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      function ProjectsComponent_ng_container_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_ng_container_17_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var project_r5 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.openModal(project_r5.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "View Info");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var project_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c0, project_r5.thumb.bgColor));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", project_r5.thumb.brandUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r5.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](project_r5.role);
        }
      }

      var ProjectsComponent = /*#__PURE__*/function () {
        function ProjectsComponent(portfolioService, cd, modalService) {
          _classCallCheck(this, ProjectsComponent);

          this.portfolioService = portfolioService;
          this.cd = cd;
          this.modalService = modalService;
          this.portfolio = new _shared_models_portfolio_model__WEBPACK_IMPORTED_MODULE_0__["Portfolio"]();
          this.filteredSkills = [];
        }

        _createClass(ProjectsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._initProjects();
          }
        }, {
          key: "filterProjectsBySkills",
          value: function filterProjectsBySkills(skill) {
            var _this = this;

            if (skill) {
              // determine if skill is currently being filtered
              var index = this.filteredSkills.findIndex(function (filteredSkill) {
                return filteredSkill === skill.name;
              });

              if (index > -1) {
                // remove skill from filtered skills
                this.filteredSkills.splice(index, 1);
              } else {
                // add skill to filtered skills
                this.filteredSkills.push(skill.name);
              }

              this.portfolioService.getPortfolioBySkill(this.filteredSkills).subscribe(function (data) {
                _this.portfolio = data;

                _this.cd.detectChanges();
              });
            } else {
              this.filteredSkills = [];
              this.portfolioService.getPortfolio().subscribe(function (data) {
                _this.portfolio = data;

                _this.cd.detectChanges();
              });
            }
          }
        }, {
          key: "getShowAllClass",
          value: function getShowAllClass() {
            if (this.filteredSkills.length === 0) {
              return 'active';
            }
          }
        }, {
          key: "getSkillItemClass",
          value: function getSkillItemClass(skill) {
            if (skill.count === 0) {
              return 'inactive';
            } else if (this.filteredSkills.includes(skill.name)) {
              return 'active';
            }
          }
        }, {
          key: "openModal",
          value: function openModal(projectId) {
            var initialState = {
              project: this.portfolio.projects.find(function (project) {
                return project.id === projectId;
              })
            };
            this.modalService.show(_components_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioModalComponent"], {
              initialState: initialState
            }).setClass('modal-lg');
          }
        }, {
          key: "_initProjects",
          value: function _initProjects() {
            var _this2 = this;

            this.portfolioService.getPortfolio().subscribe(function (data) {
              _this2.portfolio = data;
              _this2.projectsCount = data.projects.length;

              _this2.cd.detectChanges();
            }, function (err) {
              console.error(err);
            });
          }
        }]);

        return ProjectsComponent;
      }();

      ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) {
        return new (t || ProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_portfolio_service__WEBPACK_IMPORTED_MODULE_3__["PortfolioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]));
      };

      ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ProjectsComponent,
        selectors: [["app-projects"]],
        decls: 18,
        vars: 4,
        consts: [[1, "container"], [1, "row"], [1, "col-sm"], [1, "projects"], [1, "projects__header"], [1, "projects__description"], [1, "skills"], [1, "skills__item", 3, "ngClass", "click"], [1, "skills__name"], [1, "skills__count"], ["class", "skills__item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "project-card", 3, "ngStyle"], [1, "project-card__brand", 3, "src"], [1, "project-card__overlay"], [1, "project-card__content"], [1, "project-card__name"], [1, "project-card__role"], [1, "btn", "project-card__button", 3, "click"]],
        template: function ProjectsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "PROJECTS");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " I've been lucky enough to have been part of several teams composed of very talented people from all over the world. You'll find projects here where I've taken an active role either as a front-end dev or as a full-stack dev. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProjectsComponent_Template_li_click_9_listener() {
              return ctx.filterProjectsBySkills();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Show All\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ProjectsComponent_li_14_Template, 5, 3, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProjectsComponent_ng_container_17_Template, 12, 6, "ng-container", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.getShowAllClass());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("(", ctx.projectsCount, ")");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.portfolio.skills);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.portfolio.projects);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"]],
        styles: [".projects[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 10rem 0 4rem 0;\n}\n.projects__header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  font-size: 2.5rem;\n  border-bottom: 1px #ff9932 solid;\n  display: inline-block;\n}\n.projects__description[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n.skills[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.skills__item[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline-block;\n  padding: 0.75rem 1.75rem;\n  margin: 0.5rem;\n  box-sizing: border-box;\n  border-radius: 0.5rem;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  color: rgba(0, 0, 0, 0.8);\n  cursor: pointer;\n}\n.skills__item.active[_ngcontent-%COMP%] {\n  border-color: rgba(0, 0, 0, 0.8);\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n}\n.skills__item.inactive[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  pointer-events: none;\n}\n.skills__name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  vertical-align: middle;\n}\n.skills__count[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 1.3rem;\n  opacity: 0.9;\n}\n.project-card[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  margin: 0 auto 3rem;\n  padding-top: 80%;\n  width: 80%;\n}\n.project-card--filler[_ngcontent-%COMP%] {\n  background-color: #000000;\n}\n.project-card__brand[_ngcontent-%COMP%] {\n  width: 50%;\n  height: auto;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  cursor: none;\n}\n.project-card__name[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.project-card__role[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 400;\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n.project-card__content[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.project-card__button[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #ff9932;\n  border-color: #ff9932;\n  padding: 0 12px;\n  height: 30px;\n  line-height: 30px;\n}\n.project-card__overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #ffffffe6;\n  display: none;\n  box-sizing: border-box;\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-card__overlay[_ngcontent-%COMP%] {\n  display: block;\n}\n\n@media (min-width: 576px) {\n  .project-card[_ngcontent-%COMP%] {\n    padding-top: 100%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xccGFydGlhbHNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFBO0FBTUEsVUFBQTtBQUtBLFdBQUE7QUNUQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFFRjtBQURFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7QUFHSjtBQURFO0VBQ0UsbUJBQUE7QUFHSjtBQUNBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFFRjtBQURFO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBRkk7RUFDRSxnQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtBQUlOO0FBRkk7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFJTjtBQURFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQUdKO0FBREU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUdKO0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUVGO0FBREU7RUFDRSx5QkFBQTtBQUdKO0FBREU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUFHSjtBQURFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQURFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFHSjtBQURFO0VBQ0UsY0FBQTtFQUNBLHlCRDVFUztFQzZFVCxxQkQ3RVM7RUM4RVQsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUdKO0FBREU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBR0o7QUFBSTtFQUNFLGNBQUE7QUFFTjtBQUdBLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsV0FBQTtFQUFGO0FBQ0Y7QUFHQSxzQkFBQTtBQUlBLHNCQUFBO0FBSUEsdUJBQUEiLCJmaWxlIjoicHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBicmVha3BvaW50cyAqL1xyXG4kYnAtc206IDU3NnB4O1xyXG4kYnAtbWQ6IDc2OHB4O1xyXG4kYnAtbGc6IDk5MnB4O1xyXG4kYnAteGw6IDEyMDBweDtcclxuXHJcbi8qIGZvbnRzICovXHJcbiRmb250LXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LXJhbGV3YXk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtam9hcXVpbi1vcnRpejogJ0FiZWwnLCBzYW5zLXNlcmlmO1xyXG5cclxuLyogY29sb3JzICovXHJcbiRoZXgtb3JhbmdlOiAjZmY5OTMyXHJcbiIsIkBpbXBvcnQgJ3BhcnRpYWxzL192YXJpYWJsZXMnO1xyXG5cclxuLnByb2plY3RzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAxMHJlbSAwIDRyZW0gMDtcclxuICAmX19oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4ICRoZXgtb3JhbmdlIHNvbGlkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAmX19kZXNjcmlwdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLnNraWxscyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgJl9faXRlbSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxLjc1cmVtO1xyXG4gICAgbWFyZ2luOiAwLjVyZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgJi5pbmFjdGl2ZSB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMztcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICZfX25hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gICZfX2NvdW50IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNhcmQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgYXV0byAzcmVtO1xyXG4gIHBhZGRpbmctdG9wOiA4MCU7XHJcbiAgd2lkdGg6IDgwJTtcclxuICAmLS1maWxsZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICB9XHJcbiAgJl9fYnJhbmQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBjdXJzb3I6IG5vbmU7XHJcbiAgfVxyXG4gICZfX25hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gICZfX3JvbGUge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhleC1vcmFuZ2U7XHJcbiAgICBib3JkZXItY29sb3I6ICRoZXgtb3JhbmdlO1xyXG4gICAgcGFkZGluZzogMCAxMnB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG4gICZfX292ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmZTY7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICAmIC5wcm9qZWN0LWNhcmRfX292ZXJsYXkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIExhcmdlciB0aGFuIDU3NnB4ICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkYnAtc20pIHtcclxuICAucHJvamVjdC1jYXJkIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZXIgdGhhbiA3NjhweCAqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDogJGJwLW1kKSB7XHJcbn1cclxuXHJcbi8qIExhcmdlciB0aGFuIDk5MnB4ICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkYnAtbGcpIHtcclxufVxyXG5cclxuLyogTGFyZ2VyIHRoYW4gMTIwMHB4ICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkYnAteGwpIHtcclxufVxyXG4iXX0= */"],
        changeDetection: 0
      });
      /***/
    },

    /***/
    "5pWK":
    /*!*******************************************************************************!*\
      !*** ./src/app/modules/portfolio/containers/portfolio/portfolio.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function pWK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var assets_data_portfolio_particles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! assets/data/portfolio-particles */
      "2q3y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../components/navbar/navbar.component */
      "nPcd");
      /* harmony import */


      var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../components/projects/projects.component */
      "4knr");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../components/contact/contact.component */
      "oBQm");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/footer/footer.component */
      "ZzKf");

      var PortfolioComponent = /*#__PURE__*/function () {
        function PortfolioComponent() {
          _classCallCheck(this, PortfolioComponent);
        }

        _createClass(PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._initParticles();

            this._initExperienceInYears();
          }
        }, {
          key: "_initExperienceInYears",
          value: function _initExperienceInYears() {
            var firstJobDate = new Date('2013-10-1'); // August

            var now = new Date();
            var diff = Math.floor(now.getTime() - firstJobDate.getTime());
            var day = 1000 * 60 * 60 * 24;
            var days = Math.floor(diff / day);
            var months = Math.floor(days / 31);
            this.experienceInYears = Math.floor(months / 12);
          }
        }, {
          key: "_initParticles",
          value: function _initParticles() {
            particlesJS('particles-js', assets_data_portfolio_particles__WEBPACK_IMPORTED_MODULE_0__["particlesConfig"], function () {});
          }
        }]);

        return PortfolioComponent;
      }();

      PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || PortfolioComponent)();
      };

      PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: PortfolioComponent,
        selectors: [["app-portfolio"]],
        decls: 63,
        vars: 1,
        consts: [[1, "container"], [1, "row"], [1, "col-sm"], [1, "header"], ["id", "particles-js", 1, "header__particles"], [1, "header__container"], [1, "header__text"], [1, "section", "intro"], ["src", "assets/images/me.jpg", "alt", "joaquin ortiz profile picture", 1, "intro__me"], [1, "intro__highlight"], [1, "col-sm-6", "col-md-4"], [1, "section", "about-me-card"], [1, "about-me-card__icon", "icon-graduation"], [1, "about-me-card__title"], [1, "about-me-card__description"], [1, "about-me-card__icon", "icon-handshake"], [1, "about-me-card__icon", "icon-tools"], [1, "col-sm-6", "col-md-6"], [1, "about-me-card__icon", "icon-peace"], [1, "col-sm-12", "col-md-6"], [1, "about-me-card__icon", "icon-child"]],
        template: function PortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-navbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Full-Stack\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Web Developer\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " for Hire\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " My name is Joaquin and I develop apps with performance in mind; no copy & paste programming here. I'm highly proficient in ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Angular + Node.js");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, ", but picking up a new framework or language isn't a problem. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h5", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Experienced ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h5", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Team Player ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " I'm a firm believer that the best way to accomplish a task is by establishing a mutual goal, communicating issues openly, and coordinating consistently. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h5", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Craftsman ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " I'm constantly honing my skills in crafting readable, scalable, and maintainable code. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "h5", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, " Integrity ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " I understand that all businesses are looking for value; and I strive to make sure that my work will always match your expectations. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h5", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Growth Mindset ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " I'm always in a state of learning and improving myself, both as a developer and as a person. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "app-projects");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "app-contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" I have a CS degree and over ", ctx.experienceInYears, " years experience as a software developer. ");
          }
        },
        directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
        styles: [".header[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  width: 100%;\n  font-family: \"Raleway\", sans-serif;\n  height: 100vh;\n  position: relative;\n  box-sizing: border-box;\n}\n.header__particles[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.header__container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.header__text[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  font-weight: 300;\n  white-space: nowrap;\n  margin: 0;\n  line-height: 1;\n  display: block;\n}\n.intro[_ngcontent-%COMP%] {\n  margin: 8rem 0 7rem;\n  text-align: center;\n}\n.intro__me[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-radius: 50%;\n  width: 180px;\n  height: 180px;\n  margin: 0 auto 2rem;\n}\n.intro__highlight[_ngcontent-%COMP%] {\n  color: #ff9932;\n  white-space: nowrap;\n}\n.about-me-card[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 4rem auto;\n  max-width: 235px;\n}\n.about-me-card__icon[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 3rem;\n}\n.about-me-card__title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n\n@media (min-width: 576px) {\n  .header__container[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 100%;\n  }\n  .header__text[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    display: inline-block;\n  }\n\n  .project__name[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .project__role[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 2rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .project__name[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .project__role[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    margin-bottom: 3rem;\n  }\n\n  .project[_ngcontent-%COMP%] {\n    margin-bottom: 28px;\n  }\n}\n\n@media (min-width: 992px) {\n  .project[_ngcontent-%COMP%] {\n    margin-bottom: 38px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xccGFydGlhbHNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQU1BLFVBQUE7QUFLQSxXQUFBO0FDVEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtDREdhO0VDRmIsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFFRjtBQURFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFHSjtBQURFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFHSjtBQURFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBR0o7QUFDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQURFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFHSjtBQURFO0VBQ0UsY0QzQlM7RUM0QlQsbUJBQUE7QUFHSjtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBRUY7QUFERTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBR0o7QUFERTtFQUNFLGVBQUE7QUFHSjtBQUNBLHNCQUFBO0FBQ0E7RUFFSTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQUNKO0VBQ0U7SUFDRSxlQUFBO0lBQ0EscUJBQUE7RUFDSjs7RUFHRTtJQUNFLGlCQUFBO0VBQUo7RUFFRTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQUFKO0FBQ0Y7QUFJQSxzQkFBQTtBQUNBO0VBRUk7SUFDRSxlQUFBO0VBSEo7RUFLRTtJQUNFLGlCQUFBO0lBQ0EsbUJBQUE7RUFISjs7RUFNQTtJQUNFLG1CQUFBO0VBSEY7QUFDRjtBQU1BLHNCQUFBO0FBQ0E7RUFDRTtJQUNFLG1CQUFBO0VBSkY7QUFDRjtBQU9BLHVCQUFBIiwiZmlsZSI6InBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJyZWFrcG9pbnRzICovXHJcbiRicC1zbTogNTc2cHg7XHJcbiRicC1tZDogNzY4cHg7XHJcbiRicC1sZzogOTkycHg7XHJcbiRicC14bDogMTIwMHB4O1xyXG5cclxuLyogZm9udHMgKi9cclxuJGZvbnQtcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtcmFsZXdheTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1qb2FxdWluLW9ydGl6OiAnQWJlbCcsIHNhbnMtc2VyaWY7XHJcblxyXG4vKiBjb2xvcnMgKi9cclxuJGhleC1vcmFuZ2U6ICNmZjk5MzJcclxuIiwiQGltcG9ydCAncGFydGlhbHMvX3ZhcmlhYmxlcyc7XHJcblxyXG4uaGVhZGVyIHtcclxuICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LXJhbGV3YXk7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAmX19wYXJ0aWNsZXMge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gICZfX2NvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgJl9fdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgbWFyZ2luOiA4cmVtIDAgN3JlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgJl9fbWUge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAycmVtO1xyXG4gIH1cclxuICAmX19oaWdobGlnaHQge1xyXG4gICAgY29sb3I6ICRoZXgtb3JhbmdlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcbn1cclxuXHJcbi5hYm91dC1tZS1jYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA0cmVtIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAyMzVweDtcclxuICAmX19pY29uIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2VyIHRoYW4gNTc2cHggKi9cclxuQG1lZGlhIChtaW4td2lkdGg6ICRicC1zbSkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgJl9fY29udGFpbmVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgICZfX3RleHQge1xyXG4gICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgLnByb2plY3Qge1xyXG4gICAgJl9fbmFtZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG4gICAgJl9fcm9sZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIExhcmdlciB0aGFuIDc2OHB4ICovXHJcbkBtZWRpYSAobWluLXdpZHRoOiAkYnAtbWQpIHtcclxuICAucHJvamVjdCB7XHJcbiAgICAmX19uYW1lIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG4gICAgJl9fcm9sZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICAucHJvamVjdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogTGFyZ2VyIHRoYW4gOTkycHggKi9cclxuQG1lZGlhIChtaW4td2lkdGg6ICRicC1sZykge1xyXG4gIC5wcm9qZWN0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDM4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBMYXJnZXIgdGhhbiAxMjAwcHggKi9cclxuQG1lZGlhIChtaW4td2lkdGg6ICRicC14bCkge1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵfac = function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]
        });
      })();
      /***/

    },

    /***/
    "Re8Q":
    /*!*******************************************************************************************!*\
      !*** ./src/app/modules/portfolio/components/portfolio-modal/portfolio-modal.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: PortfolioModalComponent */

    /***/
    function Re8Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioModalComponent", function () {
        return PortfolioModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-bootstrap/carousel */
      "LYaK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function PortfolioModalComponent_slide_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var screenshot_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", screenshot_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      }

      function PortfolioModalComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var skill_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r3);
        }
      }

      var PortfolioModalComponent = /*#__PURE__*/function () {
        function PortfolioModalComponent(bsModalRef) {
          _classCallCheck(this, PortfolioModalComponent);

          this.bsModalRef = bsModalRef;
        }

        _createClass(PortfolioModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.project);
          }
        }]);

        return PortfolioModalComponent;
      }();

      PortfolioModalComponent.ɵfac = function PortfolioModalComponent_Factory(t) {
        return new (t || PortfolioModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]));
      };

      PortfolioModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioModalComponent,
        selectors: [["app-portfolio-modal"]],
        decls: 22,
        vars: 7,
        consts: [[1, "modal-body", "project"], ["type", "button", "aria-label", "Close", 1, "project__close", "close", 3, "click"], [1, "project__close__icon", "icon-close"], [1, "project__carousel"], [3, "interval"], [4, "ngFor", "ngForOf"], [1, "container", "project__content"], [1, "row"], [1, "col-sm-4"], [1, "project__name"], [1, "project__role"], [1, "project__skills"], [1, "col-sm-8"], [1, "project__header"], [1, "project__description", 3, "innerHtml"], [1, "project__header", "mt-4"], [1, "project__screenshot", 3, "src"]],
        template: function PortfolioModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioModalComponent_Template_button_click_1_listener() {
              return ctx.bsModalRef.hide();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "carousel", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PortfolioModalComponent_slide_5_Template, 2, 1, "slide", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PortfolioModalComponent_li_14_Template, 2, 1, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "PROJECT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "ROLE");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("interval", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.screenshotUrls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.skills);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.project.description.project, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx.project.description.job, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_2__["SlideComponent"]],
        styles: [".project[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.project__close[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  height: 30px;\n  width: 30px;\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 10;\n}\n.project__close__icon[_ngcontent-%COMP%]:before {\n  margin: 0;\n}\n.project__carousel[_ngcontent-%COMP%] {\n  border-bottom: 3px solid #000;\n}\n.project__screenshot[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  background-color: #000;\n}\n.project__content[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.project__name[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.project__role[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  text-transform: uppercase;\n}\n.project__header[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.9);\n}\n.project__skills[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xccGFydGlhbHNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHBvcnRmb2xpby1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQU1BLFVBQUE7QUFLQSxXQUFBO0FDVEE7RUFDRSxVQUFBO0FBRUY7QUFERTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBSUEsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUFKO0FBUkk7RUFDRSxTQUFBO0FBVU47QUFERTtFQUNFLDZCQUFBO0FBR0o7QUFERTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFHSjtBQURFO0VBQ0UsYUFBQTtBQUdKO0FBREU7RUFDRSxlQUFBO0FBR0o7QUFERTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUFHSjtBQURFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBR0o7QUFERTtFQUNFLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBR0oiLCJmaWxlIjoicG9ydGZvbGlvLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYnJlYWtwb2ludHMgKi9cclxuJGJwLXNtOiA1NzZweDtcclxuJGJwLW1kOiA3NjhweDtcclxuJGJwLWxnOiA5OTJweDtcclxuJGJwLXhsOiAxMjAwcHg7XHJcblxyXG4vKiBmb250cyAqL1xyXG4kZm9udC1yb2JvdG86ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1yYWxld2F5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiRmb250LWpvYXF1aW4tb3J0aXo6ICdBYmVsJywgc2Fucy1zZXJpZjtcclxuXHJcbi8qIGNvbG9ycyAqL1xyXG4kaGV4LW9yYW5nZTogI2ZmOTkzMlxyXG4iLCJAaW1wb3J0ICdwYXJ0aWFscy9fdmFyaWFibGVzJztcclxuXHJcbi5wcm9qZWN0IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gICZfX2Nsb3NlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgJl9faWNvbjpiZWZvcmUge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMXJlbTtcclxuICAgIHJpZ2h0OiAxcmVtO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG4gICZfX2Nhcm91c2VsIHtcclxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDAwOztcclxuICB9XHJcbiAgJl9fc2NyZWVuc2hvdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB9XHJcbiAgJl9fY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuICAmX19uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbiAgJl9fcm9sZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG4gICZfX2hlYWRlciB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiByZ2JhKCMwMDAsIC45KTtcclxuICB9XHJcbiAgJl9fc2tpbGxzIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "Txb1":
    /*!***************************************************************!*\
      !*** ./src/app/modules/portfolio/portfolio-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: PortfolioRoutingModule */

    /***/
    function Txb1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioRoutingModule", function () {
        return PortfolioRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _containers_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./containers/portfolio/portfolio.component */
      "5pWK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _containers_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_1__["PortfolioComponent"]
      }];

      var PortfolioRoutingModule = function PortfolioRoutingModule() {
        _classCallCheck(this, PortfolioRoutingModule);
      };

      PortfolioRoutingModule.ɵfac = function PortfolioRoutingModule_Factory(t) {
        return new (t || PortfolioRoutingModule)();
      };

      PortfolioRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: PortfolioRoutingModule
      });
      PortfolioRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PortfolioRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "ZzKf":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/portfolio/components/footer/footer.component.ts ***!
      \*************************************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function ZzKf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 13,
        vars: 0,
        consts: [[1, "container-fluid", "footer"], [1, "col-sm"], [1, "social-media"], [1, "social-media__item"], ["href", "https://www.linkedin.com/in/joaquin-io", "target", "_blank", 1, "social-media__link"], [1, "icon-linkedin"], ["href", "https://github.com/jnoortiz", "target", "_blank", 1, "social-media__link"], [1, "icon-github"], [1, "footer__trademark"], [1, "footer__highlight"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "JOAQUIN ORTIZ ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\xA92019");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".social-media[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n}\n.social-media[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 3rem;\n}\n.social-media__link[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.7);\n}\n.social-media__link[_ngcontent-%COMP%]:hover, .social-media__link[_ngcontent-%COMP%]:active {\n  color: black;\n}\n.footer[_ngcontent-%COMP%] {\n  padding: 4rem 0 2rem;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n  text-align: center;\n}\n.footer__trademark[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.footer__highlight[_ngcontent-%COMP%] {\n  color: #ff9932;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xccGFydGlhbHNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQU1BLFVBQUE7QUFLQSxXQUFBO0FDVEE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQURFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBR0o7QUFERTtFQUNFLHlCQUFBO0FBR0o7QUFGSTtFQUVFLFlBQUE7QUFHTjtBQUdBO0VBQ0Usb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FBQUY7QUFDRTtFQUNFLGVBQUE7QUFDSjtBQUNFO0VBQ0UsY0RmUztBQ2dCYiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBicmVha3BvaW50cyAqL1xyXG4kYnAtc206IDU3NnB4O1xyXG4kYnAtbWQ6IDc2OHB4O1xyXG4kYnAtbGc6IDk5MnB4O1xyXG4kYnAteGw6IDEyMDBweDtcclxuXHJcbi8qIGZvbnRzICovXHJcbiRmb250LXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LXJhbGV3YXk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcclxuJGZvbnQtam9hcXVpbi1vcnRpejogJ0FiZWwnLCBzYW5zLXNlcmlmO1xyXG5cclxuLyogY29sb3JzICovXHJcbiRoZXgtb3JhbmdlOiAjZmY5OTMyXHJcbiIsIkBpbXBvcnQgJ3BhcnRpYWxzL192YXJpYWJsZXMnO1xyXG5cclxuLnNvY2lhbC1tZWRpYSB7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICB9XHJcbiAgJl9fbGluayB7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICBjb2xvcjogcmdiYSgwLDAsMCwxKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBwYWRkaW5nOiA0cmVtIDAgMnJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAmX190cmFkZW1hcmsge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuICAmX19oaWdobGlnaHQge1xyXG4gICAgY29sb3I6ICRoZXgtb3JhbmdlO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "nPcd":
    /*!*************************************************************************!*\
      !*** ./src/app/modules/portfolio/components/navbar/navbar.component.ts ***!
      \*************************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function nPcd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent() {
          _classCallCheck(this, NavbarComponent);
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)();
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        decls: 5,
        vars: 0,
        consts: [[1, "navbar", "navbar--custom"], [1, "brand"], ["src", "assets/icons/android-chrome-512x512.png", 1, "brand__logo"], [1, "brand__name"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Joaquin Ortiz");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".navbar--custom[_ngcontent-%COMP%] {\n  background-color: #fff;\n  text-align: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  position: fixed;\n  width: 100%;\n  z-index: 10;\n}\n.brand[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.brand__logo[_ngcontent-%COMP%] {\n  height: auto;\n  width: 2.5rem;\n  margin-right: 0.5rem;\n  vertical-align: middle;\n}\n.brand__name[_ngcontent-%COMP%] {\n  font-family: \"Abel\", sans-serif;\n  font-weight: 300;\n  font-size: 1.8rem;\n  vertical-align: middle;\n}\n.brand__block[_ngcontent-%COMP%] {\n  background-color: #ff9932;\n  width: 0.5rem;\n  height: 1.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xccGFydGlhbHNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBQTtBQU1BLFVBQUE7QUFLQSxXQUFBO0FDVEE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtBQUVGO0FBREU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFHSjtBQURFO0VBQ0UsK0JEWGlCO0VDWWpCLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUdKO0FBREU7RUFDRSx5QkRkUztFQ2VULGFBQUE7RUFDQSxjQUFBO0FBR0oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogYnJlYWtwb2ludHMgKi9cclxuJGJwLXNtOiA1NzZweDtcclxuJGJwLW1kOiA3NjhweDtcclxuJGJwLWxnOiA5OTJweDtcclxuJGJwLXhsOiAxMjAwcHg7XHJcblxyXG4vKiBmb250cyAqL1xyXG4kZm9udC1yb2JvdG86ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1yYWxld2F5OiAnUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbiRmb250LWpvYXF1aW4tb3J0aXo6ICdBYmVsJywgc2Fucy1zZXJpZjtcclxuXHJcbi8qIGNvbG9ycyAqL1xyXG4kaGV4LW9yYW5nZTogI2ZmOTkzMlxyXG4iLCJAaW1wb3J0ICdwYXJ0aWFscy9fdmFyaWFibGVzJztcclxuXHJcbi5uYXZiYXItLWN1c3RvbSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5icmFuZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgJl9fbG9nbyB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgfVxyXG4gICZfX25hbWUge1xyXG4gICAgZm9udC1mYW1pbHk6ICRmb250LWpvYXF1aW4tb3J0aXo7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICAmX19ibG9jayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaGV4LW9yYW5nZTtcclxuICAgIHdpZHRoOiAwLjVyZW07XHJcbiAgICBoZWlnaHQ6IDEuOHJlbTtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    "oBQm":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/portfolio/components/contact/contact.component.ts ***!
      \***************************************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function oBQm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 9,
        vars: 0,
        consts: [[1, "container"], [1, "row"], [1, "col-sm"], [1, "section", "contact"], ["href", "mailto:work.jno.ortiz@gmail.com?Subject=Job%20Offer", "target", "_blank", 1, "contact__emailto"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Interested in working with me? E-mail me at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "work.jno.ortiz@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \uD83D\uDE42");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".contact[_ngcontent-%COMP%] {\n  margin: 25rem 0;\n  text-align: center;\n}\n.contact__header[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.contact__emailto[_ngcontent-%COMP%] {\n  color: #ff9932;\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Fzc1xccGFydGlhbHNcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQUE7QUFNQSxVQUFBO0FBS0EsV0FBQTtBQ1RBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBRUY7QUFERTtFQUNFLGVBQUE7QUFHSjtBQURFO0VBQ0UsY0RHUztFQ0ZULDBCQUFBO0FBR0oiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGJyZWFrcG9pbnRzICovXHJcbiRicC1zbTogNTc2cHg7XHJcbiRicC1tZDogNzY4cHg7XHJcbiRicC1sZzogOTkycHg7XHJcbiRicC14bDogMTIwMHB4O1xyXG5cclxuLyogZm9udHMgKi9cclxuJGZvbnQtcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtcmFsZXdheTogJ1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG4kZm9udC1qb2FxdWluLW9ydGl6OiAnQWJlbCcsIHNhbnMtc2VyaWY7XHJcblxyXG4vKiBjb2xvcnMgKi9cclxuJGhleC1vcmFuZ2U6ICNmZjk5MzJcclxuIiwiQGltcG9ydCAncGFydGlhbHMvX3ZhcmlhYmxlcyc7XHJcblxyXG4uY29udGFjdCB7XHJcbiAgbWFyZ2luOiAyNXJlbSAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAmX19oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuICAmX19lbWFpbHRvIHtcclxuICAgIGNvbG9yOiAkaGV4LW9yYW5nZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    "oFHo":
    /*!**************************************************!*\
      !*** ./src/app/shared/models/portfolio.model.ts ***!
      \**************************************************/

    /*! exports provided: PortfolioSkill, PortfolioProject, Portfolio */

    /***/
    function oFHo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioSkill", function () {
        return PortfolioSkill;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioProject", function () {
        return PortfolioProject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Portfolio", function () {
        return Portfolio;
      });

      var PortfolioSkill = function PortfolioSkill() {
        _classCallCheck(this, PortfolioSkill);
      };

      var PortfolioProject = function PortfolioProject() {
        _classCallCheck(this, PortfolioProject);
      };

      var Portfolio = function Portfolio() {
        _classCallCheck(this, Portfolio);

        this.skills = [];
        this.projects = [];
      };
      /***/

    },

    /***/
    "pZC5":
    /*!*******************************************************!*\
      !*** ./src/app/modules/portfolio/portfolio.module.ts ***!
      \*******************************************************/

    /*! exports provided: PortfolioModule */

    /***/
    function pZC5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioModule", function () {
        return PortfolioModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./portfolio-routing.module */
      "Txb1");
      /* harmony import */


      var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/carousel */
      "LYaK");
      /* harmony import */


      var _services_portfolio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/portfolio.service */
      "t+KS");
      /* harmony import */


      var _containers_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./containers/portfolio/portfolio.component */
      "5pWK");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "nPcd");
      /* harmony import */


      var _components_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/portfolio-modal/portfolio-modal.component */
      "Re8Q");
      /* harmony import */


      var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/projects/projects.component */
      "4knr");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "ZzKf");
      /* harmony import */


      var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/contact/contact.component */
      "oBQm");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioModule = function PortfolioModule() {
        _classCallCheck(this, PortfolioModule);
      };

      PortfolioModule.ɵfac = function PortfolioModule_Factory(t) {
        return new (t || PortfolioModule)();
      };

      PortfolioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
        type: PortfolioModule
      });
      PortfolioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
        providers: [_services_portfolio_service__WEBPACK_IMPORTED_MODULE_5__["PortfolioService"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_3__["PortfolioRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](PortfolioModule, {
          declarations: [_containers_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _components_portfolio_modal_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioModalComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _portfolio_routing_module__WEBPACK_IMPORTED_MODULE_3__["PortfolioRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselModule"]]
        });
      })();
      /***/

    },

    /***/
    "t+KS":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/portfolio/services/portfolio.service.ts ***!
      \*****************************************************************/

    /*! exports provided: PortfolioService */

    /***/
    function tKS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioService", function () {
        return PortfolioService;
      });
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var PortfolioService = /*#__PURE__*/function () {
        function PortfolioService(http) {
          _classCallCheck(this, PortfolioService);

          this.http = http;
        }

        _createClass(PortfolioService, [{
          key: "getPortfolio",
          value: function getPortfolio() {
            var _this3 = this;

            return this.http.get('assets/data/projects.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (projects) {
              return _this3._createPortfolio(projects);
            }));
          }
        }, {
          key: "getPortfolioBySkill",
          value: function getPortfolioBySkill(skill) {
            var _this4 = this;

            return this.http.get('assets/data/projects.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (projects) {
              return _this4._filterProjectsBySkill(projects, skill);
            }));
          } // TODO: transfer logic to backend

        }, {
          key: "_createPortfolio",
          value: function _createPortfolio(projects) {
            var portfolio = {
              skills: [],
              projects: projects
            }; // iterate over projects array

            projects.forEach(function (project) {
              return (// iterate over project skills
                project.skills.forEach(function (projectSkill) {
                  // find skill from portfolio skills list
                  var skill = portfolio.skills.find(function (portfolioSkill) {
                    return portfolioSkill.name === projectSkill;
                  }); // if skill exists then add skill count, otherwise create add skill to portfolio skills list

                  if (skill) {
                    skill.count++;
                  } else {
                    portfolio.skills.push({
                      name: projectSkill,
                      count: 1
                    });
                  }
                })
              );
            });
            return portfolio;
          } // TODO: transfer logic to backend

        }, {
          key: "_filterProjectsBySkill",
          value: function _filterProjectsBySkill(projects, filterSkills) {
            var portfolio = this._createPortfolio(projects);

            filterSkills.forEach(function (filter) {
              portfolio.projects = portfolio.projects.filter(function (project) {
                return project.skills.includes(filter);
              });
            }); // reset skills count to 0

            portfolio.skills.forEach(function (portfolioSkill) {
              return portfolioSkill.count = 0;
            }); // add count

            portfolio.skills.forEach(function (portfolioSkill) {
              return portfolio.projects.forEach(function (project) {
                if (project.skills.includes(portfolioSkill.name)) {
                  portfolioSkill.count++;
                }
              });
            });
            return portfolio;
          }
        }]);

        return PortfolioService;
      }();

      PortfolioService.ɵfac = function PortfolioService_Factory(t) {
        return new (t || PortfolioService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      PortfolioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: PortfolioService,
        factory: PortfolioService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    "tk/3":
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js ***!
      \********************************************************************/

    /*! exports provided: HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HttpErrorResponse, HttpEventType, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpResponseBase, HttpUrlEncodingCodec, HttpXhrBackend, HttpXsrfTokenExtractor, JsonpClientBackend, JsonpInterceptor, XhrFactory, ɵHttpInterceptingHandler, ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h */

    /***/
    function tk3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function () {
        return HTTP_INTERCEPTORS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpBackend", function () {
        return HttpBackend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpClient", function () {
        return HttpClient;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function () {
        return HttpClientJsonpModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpClientModule", function () {
        return HttpClientModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function () {
        return HttpClientXsrfModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function () {
        return HttpErrorResponse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpEventType", function () {
        return HttpEventType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpHandler", function () {
        return HttpHandler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function () {
        return HttpHeaderResponse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpHeaders", function () {
        return HttpHeaders;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpParams", function () {
        return HttpParams;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpRequest", function () {
        return HttpRequest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpResponse", function () {
        return HttpResponse;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function () {
        return HttpResponseBase;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function () {
        return HttpUrlEncodingCodec;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function () {
        return HttpXhrBackend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function () {
        return HttpXsrfTokenExtractor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function () {
        return JsonpClientBackend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function () {
        return JsonpInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "XhrFactory", function () {
        return XhrFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function () {
        return HttpInterceptingHandler;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function () {
        return NoopInterceptor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function () {
        return JsonpCallbackContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function () {
        return jsonpCallbackContext;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function () {
        return BrowserXhr;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function () {
        return XSRF_COOKIE_NAME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function () {
        return XSRF_HEADER_NAME;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function () {
        return HttpXsrfCookieExtractor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function () {
        return HttpXsrfInterceptor;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /**
       * @license Angular v11.2.7
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
       * `HttpResponse`.
       *
       * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
       * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
       * `HttpBackend`.
       *
       * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
       *
       * @publicApi
       */


      var HttpHandler = function HttpHandler() {
        _classCallCheck(this, HttpHandler);
      };
      /**
       * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
       *
       * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
       *
       * When injected, `HttpBackend` dispatches requests directly to the backend, without going
       * through the interceptor chain.
       *
       * @publicApi
       */


      var HttpBackend = function HttpBackend() {
        _classCallCheck(this, HttpBackend);
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Represents the header configuration options for an HTTP request.
       * Instances are immutable. Modifying methods return a cloned
       * instance with the change. The original object is never changed.
       *
       * @publicApi
       */


      var HttpHeaders = /*#__PURE__*/function () {
        /**  Constructs a new HTTP header object with the given values.*/
        function HttpHeaders(headers) {
          var _this5 = this;

          _classCallCheck(this, HttpHeaders);

          /**
           * Internal map of lowercased header names to the normalized
           * form of the name (the form seen first).
           */
          this.normalizedNames = new Map();
          /**
           * Queued updates to be materialized the next initialization.
           */

          this.lazyUpdate = null;

          if (!headers) {
            this.headers = new Map();
          } else if (typeof headers === 'string') {
            this.lazyInit = function () {
              _this5.headers = new Map();
              headers.split('\n').forEach(function (line) {
                var index = line.indexOf(':');

                if (index > 0) {
                  var name = line.slice(0, index);
                  var key = name.toLowerCase();
                  var value = line.slice(index + 1).trim();

                  _this5.maybeSetNormalizedName(name, key);

                  if (_this5.headers.has(key)) {
                    _this5.headers.get(key).push(value);
                  } else {
                    _this5.headers.set(key, [value]);
                  }
                }
              });
            };
          } else {
            this.lazyInit = function () {
              _this5.headers = new Map();
              Object.keys(headers).forEach(function (name) {
                var values = headers[name];
                var key = name.toLowerCase();

                if (typeof values === 'string') {
                  values = [values];
                }

                if (values.length > 0) {
                  _this5.headers.set(key, values);

                  _this5.maybeSetNormalizedName(name, key);
                }
              });
            };
          }
        }
        /**
         * Checks for existence of a given header.
         *
         * @param name The header name to check for existence.
         *
         * @returns True if the header exists, false otherwise.
         */


        _createClass(HttpHeaders, [{
          key: "has",
          value: function has(name) {
            this.init();
            return this.headers.has(name.toLowerCase());
          }
          /**
           * Retrieves the first value of a given header.
           *
           * @param name The header name.
           *
           * @returns The value string if the header exists, null otherwise
           */

        }, {
          key: "get",
          value: function get(name) {
            this.init();
            var values = this.headers.get(name.toLowerCase());
            return values && values.length > 0 ? values[0] : null;
          }
          /**
           * Retrieves the names of the headers.
           *
           * @returns A list of header names.
           */

        }, {
          key: "keys",
          value: function keys() {
            this.init();
            return Array.from(this.normalizedNames.values());
          }
          /**
           * Retrieves a list of values for a given header.
           *
           * @param name The header name from which to retrieve values.
           *
           * @returns A string of values if the header exists, null otherwise.
           */

        }, {
          key: "getAll",
          value: function getAll(name) {
            this.init();
            return this.headers.get(name.toLowerCase()) || null;
          }
          /**
           * Appends a new value to the existing set of values for a header
           * and returns them in a clone of the original instance.
           *
           * @param name The header name for which to append the values.
           * @param value The value to append.
           *
           * @returns A clone of the HTTP headers object with the value appended to the given header.
           */

        }, {
          key: "append",
          value: function append(name, value) {
            return this.clone({
              name: name,
              value: value,
              op: 'a'
            });
          }
          /**
           * Sets or modifies a value for a given header in a clone of the original instance.
           * If the header already exists, its value is replaced with the given value
           * in the returned object.
           *
           * @param name The header name.
           * @param value The value or values to set or overide for the given header.
           *
           * @returns A clone of the HTTP headers object with the newly set header value.
           */

        }, {
          key: "set",
          value: function set(name, value) {
            return this.clone({
              name: name,
              value: value,
              op: 's'
            });
          }
          /**
           * Deletes values for a given header in a clone of the original instance.
           *
           * @param name The header name.
           * @param value The value or values to delete for the given header.
           *
           * @returns A clone of the HTTP headers object with the given value deleted.
           */

        }, {
          key: "delete",
          value: function _delete(name, value) {
            return this.clone({
              name: name,
              value: value,
              op: 'd'
            });
          }
        }, {
          key: "maybeSetNormalizedName",
          value: function maybeSetNormalizedName(name, lcName) {
            if (!this.normalizedNames.has(lcName)) {
              this.normalizedNames.set(lcName, name);
            }
          }
        }, {
          key: "init",
          value: function init() {
            var _this6 = this;

            if (!!this.lazyInit) {
              if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
              } else {
                this.lazyInit();
              }

              this.lazyInit = null;

              if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) {
                  return _this6.applyUpdate(update);
                });
                this.lazyUpdate = null;
              }
            }
          }
        }, {
          key: "copyFrom",
          value: function copyFrom(other) {
            var _this7 = this;

            other.init();
            Array.from(other.headers.keys()).forEach(function (key) {
              _this7.headers.set(key, other.headers.get(key));

              _this7.normalizedNames.set(key, other.normalizedNames.get(key));
            });
          }
        }, {
          key: "clone",
          value: function clone(update) {
            var clone = new HttpHeaders();
            clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
            clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
            return clone;
          }
        }, {
          key: "applyUpdate",
          value: function applyUpdate(update) {
            var key = update.name.toLowerCase();

            switch (update.op) {
              case 'a':
              case 's':
                var value = update.value;

                if (typeof value === 'string') {
                  value = [value];
                }

                if (value.length === 0) {
                  return;
                }

                this.maybeSetNormalizedName(update.name, key);
                var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, _toConsumableArray(value));
                this.headers.set(key, base);
                break;

              case 'd':
                var toDelete = update.value;

                if (!toDelete) {
                  this.headers["delete"](key);
                  this.normalizedNames["delete"](key);
                } else {
                  var existing = this.headers.get(key);

                  if (!existing) {
                    return;
                  }

                  existing = existing.filter(function (value) {
                    return toDelete.indexOf(value) === -1;
                  });

                  if (existing.length === 0) {
                    this.headers["delete"](key);
                    this.normalizedNames["delete"](key);
                  } else {
                    this.headers.set(key, existing);
                  }
                }

                break;
            }
          }
          /**
           * @internal
           */

        }, {
          key: "forEach",
          value: function forEach(fn) {
            var _this8 = this;

            this.init();
            Array.from(this.normalizedNames.keys()).forEach(function (key) {
              return fn(_this8.normalizedNames.get(key), _this8.headers.get(key));
            });
          }
        }]);

        return HttpHeaders;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Provides encoding and decoding of URL parameter and query-string values.
       *
       * Serializes and parses URL parameter keys and values to encode and decode them.
       * If you pass URL query parameters without encoding,
       * the query parameters can be misinterpreted at the receiving end.
       *
       *
       * @publicApi
       */


      var HttpUrlEncodingCodec = /*#__PURE__*/function () {
        function HttpUrlEncodingCodec() {
          _classCallCheck(this, HttpUrlEncodingCodec);
        }

        _createClass(HttpUrlEncodingCodec, [{
          key: "encodeKey",
          value:
          /**
           * Encodes a key name for a URL parameter or query-string.
           * @param key The key name.
           * @returns The encoded key name.
           */
          function encodeKey(key) {
            return standardEncoding(key);
          }
          /**
           * Encodes the value of a URL parameter or query-string.
           * @param value The value.
           * @returns The encoded value.
           */

        }, {
          key: "encodeValue",
          value: function encodeValue(value) {
            return standardEncoding(value);
          }
          /**
           * Decodes an encoded URL parameter or query-string key.
           * @param key The encoded key name.
           * @returns The decoded key name.
           */

        }, {
          key: "decodeKey",
          value: function decodeKey(key) {
            return decodeURIComponent(key);
          }
          /**
           * Decodes an encoded URL parameter or query-string value.
           * @param value The encoded value.
           * @returns The decoded value.
           */

        }, {
          key: "decodeValue",
          value: function decodeValue(value) {
            return decodeURIComponent(value);
          }
        }]);

        return HttpUrlEncodingCodec;
      }();

      function paramParser(rawParams, codec) {
        var map = new Map();

        if (rawParams.length > 0) {
          // The `window.location.search` can be used while creating an instance of the `HttpParams` class
          // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
          // may start with the `?` char, so we strip it if it's present.
          var params = rawParams.replace(/^\?/, '').split('&');
          params.forEach(function (param) {
            var eqIdx = param.indexOf('=');

            var _ref = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))],
                _ref2 = _slicedToArray(_ref, 2),
                key = _ref2[0],
                val = _ref2[1];

            var list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
          });
        }

        return map;
      }

      function standardEncoding(v) {
        return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
      }
      /**
       * An HTTP request/response body that represents serialized parameters,
       * per the MIME type `application/x-www-form-urlencoded`.
       *
       * This class is immutable; all mutation operations return a new instance.
       *
       * @publicApi
       */


      var HttpParams = /*#__PURE__*/function () {
        function HttpParams() {
          var _this9 = this;

          var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, HttpParams);

          this.updates = null;
          this.cloneFrom = null;
          this.encoder = options.encoder || new HttpUrlEncodingCodec();

          if (!!options.fromString) {
            if (!!options.fromObject) {
              throw new Error("Cannot specify both fromString and fromObject.");
            }

            this.map = paramParser(options.fromString, this.encoder);
          } else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(function (key) {
              var value = options.fromObject[key];

              _this9.map.set(key, Array.isArray(value) ? value : [value]);
            });
          } else {
            this.map = null;
          }
        }
        /**
         * Reports whether the body includes one or more values for a given parameter.
         * @param param The parameter name.
         * @returns True if the parameter has one or more values,
         * false if it has no value or is not present.
         */


        _createClass(HttpParams, [{
          key: "has",
          value: function has(param) {
            this.init();
            return this.map.has(param);
          }
          /**
           * Retrieves the first value for a parameter.
           * @param param The parameter name.
           * @returns The first value of the given parameter,
           * or `null` if the parameter is not present.
           */

        }, {
          key: "get",
          value: function get(param) {
            this.init();
            var res = this.map.get(param);
            return !!res ? res[0] : null;
          }
          /**
           * Retrieves all values for a  parameter.
           * @param param The parameter name.
           * @returns All values in a string array,
           * or `null` if the parameter not present.
           */

        }, {
          key: "getAll",
          value: function getAll(param) {
            this.init();
            return this.map.get(param) || null;
          }
          /**
           * Retrieves all the parameters for this body.
           * @returns The parameter names in a string array.
           */

        }, {
          key: "keys",
          value: function keys() {
            this.init();
            return Array.from(this.map.keys());
          }
          /**
           * Appends a new value to existing values for a parameter.
           * @param param The parameter name.
           * @param value The new value to add.
           * @return A new body with the appended value.
           */

        }, {
          key: "append",
          value: function append(param, value) {
            return this.clone({
              param: param,
              value: value,
              op: 'a'
            });
          }
          /**
           * Constructs a new body with appended values for the given parameter name.
           * @param params parameters and values
           * @return A new body with the new value.
           */

        }, {
          key: "appendAll",
          value: function appendAll(params) {
            var updates = [];
            Object.keys(params).forEach(function (param) {
              var value = params[param];

              if (Array.isArray(value)) {
                value.forEach(function (_value) {
                  updates.push({
                    param: param,
                    value: _value,
                    op: 'a'
                  });
                });
              } else {
                updates.push({
                  param: param,
                  value: value,
                  op: 'a'
                });
              }
            });
            return this.clone(updates);
          }
          /**
           * Replaces the value for a parameter.
           * @param param The parameter name.
           * @param value The new value.
           * @return A new body with the new value.
           */

        }, {
          key: "set",
          value: function set(param, value) {
            return this.clone({
              param: param,
              value: value,
              op: 's'
            });
          }
          /**
           * Removes a given value or all values from a parameter.
           * @param param The parameter name.
           * @param value The value to remove, if provided.
           * @return A new body with the given value removed, or with all values
           * removed if no value is specified.
           */

        }, {
          key: "delete",
          value: function _delete(param, value) {
            return this.clone({
              param: param,
              value: value,
              op: 'd'
            });
          }
          /**
           * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
           * separated by `&`s.
           */

        }, {
          key: "toString",
          value: function toString() {
            var _this10 = this;

            this.init();
            return this.keys().map(function (key) {
              var eKey = _this10.encoder.encodeKey(key); // `a: ['1']` produces `'a=1'`
              // `b: []` produces `''`
              // `c: ['1', '2']` produces `'c=1&c=2'`


              return _this10.map.get(key).map(function (value) {
                return eKey + '=' + _this10.encoder.encodeValue(value);
              }).join('&');
            }) // filter out empty values because `b: []` produces `''`
            // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
            .filter(function (param) {
              return param !== '';
            }).join('&');
          }
        }, {
          key: "clone",
          value: function clone(update) {
            var clone = new HttpParams({
              encoder: this.encoder
            });
            clone.cloneFrom = this.cloneFrom || this;
            clone.updates = (this.updates || []).concat(update);
            return clone;
          }
        }, {
          key: "init",
          value: function init() {
            var _this11 = this;

            if (this.map === null) {
              this.map = new Map();
            }

            if (this.cloneFrom !== null) {
              this.cloneFrom.init();
              this.cloneFrom.keys().forEach(function (key) {
                return _this11.map.set(key, _this11.cloneFrom.map.get(key));
              });
              this.updates.forEach(function (update) {
                switch (update.op) {
                  case 'a':
                  case 's':
                    var base = (update.op === 'a' ? _this11.map.get(update.param) : undefined) || [];
                    base.push(update.value);

                    _this11.map.set(update.param, base);

                    break;

                  case 'd':
                    if (update.value !== undefined) {
                      var _base = _this11.map.get(update.param) || [];

                      var idx = _base.indexOf(update.value);

                      if (idx !== -1) {
                        _base.splice(idx, 1);
                      }

                      if (_base.length > 0) {
                        _this11.map.set(update.param, _base);
                      } else {
                        _this11.map["delete"](update.param);
                      }
                    } else {
                      _this11.map["delete"](update.param);

                      break;
                    }

                }
              });
              this.cloneFrom = this.updates = null;
            }
          }
        }]);

        return HttpParams;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Determine whether the given HTTP method may include a body.
       */


      function mightHaveBody(method) {
        switch (method) {
          case 'DELETE':
          case 'GET':
          case 'HEAD':
          case 'OPTIONS':
          case 'JSONP':
            return false;

          default:
            return true;
        }
      }
      /**
       * Safely assert whether the given value is an ArrayBuffer.
       *
       * In some execution environments ArrayBuffer is not defined.
       */


      function isArrayBuffer(value) {
        return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
      }
      /**
       * Safely assert whether the given value is a Blob.
       *
       * In some execution environments Blob is not defined.
       */


      function isBlob(value) {
        return typeof Blob !== 'undefined' && value instanceof Blob;
      }
      /**
       * Safely assert whether the given value is a FormData instance.
       *
       * In some execution environments FormData is not defined.
       */


      function isFormData(value) {
        return typeof FormData !== 'undefined' && value instanceof FormData;
      }
      /**
       * An outgoing HTTP request with an optional typed body.
       *
       * `HttpRequest` represents an outgoing request, including URL, method,
       * headers, body, and other request configuration options. Instances should be
       * assumed to be immutable. To modify a `HttpRequest`, the `clone`
       * method should be used.
       *
       * @publicApi
       */


      var HttpRequest = /*#__PURE__*/function () {
        function HttpRequest(method, url, third, fourth) {
          _classCallCheck(this, HttpRequest);

          this.url = url;
          /**
           * The request body, or `null` if one isn't set.
           *
           * Bodies are not enforced to be immutable, as they can include a reference to any
           * user-defined data type. However, interceptors should take care to preserve
           * idempotence by treating them as such.
           */

          this.body = null;
          /**
           * Whether this request should be made in a way that exposes progress events.
           *
           * Progress events are expensive (change detection runs on each event) and so
           * they should only be requested if the consumer intends to monitor them.
           */

          this.reportProgress = false;
          /**
           * Whether this request should be sent with outgoing credentials (cookies).
           */

          this.withCredentials = false;
          /**
           * The expected response type of the server.
           *
           * This is used to parse the response appropriately before returning it to
           * the requestee.
           */

          this.responseType = 'json';
          this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
          // options, if any.

          var options; // Check whether a body argument is expected. The only valid way to omit
          // the body argument is to use a known no-body method like GET.

          if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = third !== undefined ? third : null;
            options = fourth;
          } else {
            // No body required, options are the third argument. The body stays null.
            options = third;
          } // If options have been passed, interpret them.


          if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

            if (!!options.responseType) {
              this.responseType = options.responseType;
            } // Override headers if they're provided.


            if (!!options.headers) {
              this.headers = options.headers;
            }

            if (!!options.params) {
              this.params = options.params;
            }
          } // If no headers have been passed in, construct a new HttpHeaders instance.


          if (!this.headers) {
            this.headers = new HttpHeaders();
          } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


          if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
          } else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();

            if (params.length === 0) {
              // No parameters, the visible URL is just the URL given at creation time.
              this.urlWithParams = url;
            } else {
              // Does the URL already have query parameters? Look for '?'.
              var qIdx = url.indexOf('?'); // There are 3 cases to handle:
              // 1) No existing parameters -> append '?' followed by params.
              // 2) '?' exists and is followed by existing query string ->
              //    append '&' followed by params.
              // 3) '?' exists at the end of the url -> append params directly.
              // This basically amounts to determining the character, if any, with
              // which to join the URL and parameters.

              var sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
              this.urlWithParams = url + sep + params;
            }
          }
        }
        /**
         * Transform the free-form body into a serialized format suitable for
         * transmission to the server.
         */


        _createClass(HttpRequest, [{
          key: "serializeBody",
          value: function serializeBody() {
            // If no body is present, no need to serialize it.
            if (this.body === null) {
              return null;
            } // Check whether the body is already in a serialized form. If so,
            // it can just be returned directly.


            if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || typeof this.body === 'string') {
              return this.body;
            } // Check whether the body is an instance of HttpUrlEncodedParams.


            if (this.body instanceof HttpParams) {
              return this.body.toString();
            } // Check whether the body is an object or array, and serialize with JSON if so.


            if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
              return JSON.stringify(this.body);
            } // Fall back on toString() for everything else.


            return this.body.toString();
          }
          /**
           * Examine the body and attempt to infer an appropriate MIME type
           * for it.
           *
           * If no such type can be inferred, this method will return `null`.
           */

        }, {
          key: "detectContentTypeHeader",
          value: function detectContentTypeHeader() {
            // An empty body has no content type.
            if (this.body === null) {
              return null;
            } // FormData bodies rely on the browser's content type assignment.


            if (isFormData(this.body)) {
              return null;
            } // Blobs usually have their own content type. If it doesn't, then
            // no type can be inferred.


            if (isBlob(this.body)) {
              return this.body.type || null;
            } // Array buffers have unknown contents and thus no type can be inferred.


            if (isArrayBuffer(this.body)) {
              return null;
            } // Technically, strings could be a form of JSON data, but it's safe enough
            // to assume they're plain strings.


            if (typeof this.body === 'string') {
              return 'text/plain';
            } // `HttpUrlEncodedParams` has its own content-type.


            if (this.body instanceof HttpParams) {
              return 'application/x-www-form-urlencoded;charset=UTF-8';
            } // Arrays, objects, and numbers will be encoded as JSON.


            if (typeof this.body === 'object' || typeof this.body === 'number' || Array.isArray(this.body)) {
              return 'application/json';
            } // No type could be inferred.


            return null;
          }
        }, {
          key: "clone",
          value: function clone() {
            var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            // For method, url, and responseType, take the current value unless
            // it is overridden in the update hash.
            var method = update.method || this.method;
            var url = update.url || this.url;
            var responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
            // whatever current body is present is being overridden with an empty
            // body, whereas an `undefined` value in update.body implies no
            // override.

            var body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
            // `false` and `undefined` in the update args.

            var withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
            var reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
            // `setParams` are used.

            var headers = update.headers || this.headers;
            var params = update.params || this.params; // Check whether the caller has asked to add headers.

            if (update.setHeaders !== undefined) {
              // Set every requested header.
              headers = Object.keys(update.setHeaders).reduce(function (headers, name) {
                return headers.set(name, update.setHeaders[name]);
              }, headers);
            } // Check whether the caller has asked to set params.


            if (update.setParams) {
              // Set every requested param.
              params = Object.keys(update.setParams).reduce(function (params, param) {
                return params.set(param, update.setParams[param]);
              }, params);
            } // Finally, construct the new HttpRequest using the pieces from above.


            return new HttpRequest(method, url, body, {
              params: params,
              headers: headers,
              reportProgress: reportProgress,
              responseType: responseType,
              withCredentials: withCredentials
            });
          }
        }]);

        return HttpRequest;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Type enumeration for the different kinds of `HttpEvent`.
       *
       * @publicApi
       */


      var HttpEventType;

      (function (HttpEventType) {
        /**
         * The request was sent out over the wire.
         */
        HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
        /**
         * An upload progress event was received.
         */

        HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
        /**
         * The response status code and headers were received.
         */

        HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
        /**
         * A download progress event was received.
         */

        HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
        /**
         * The full response including the body was received.
         */

        HttpEventType[HttpEventType["Response"] = 4] = "Response";
        /**
         * A custom event from an interceptor or a backend.
         */

        HttpEventType[HttpEventType["User"] = 5] = "User";
      })(HttpEventType || (HttpEventType = {}));
      /**
       * Base class for both `HttpResponse` and `HttpHeaderResponse`.
       *
       * @publicApi
       */


      var HttpResponseBase =
      /**
       * Super-constructor for all responses.
       *
       * The single parameter accepted is an initialization hash. Any properties
       * of the response passed there will override the default values.
       */
      function HttpResponseBase(init) {
        var defaultStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
        var defaultStatusText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';

        _classCallCheck(this, HttpResponseBase);

        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null; // Cache the ok value to avoid defining a getter.

        this.ok = this.status >= 200 && this.status < 300;
      };
      /**
       * A partial HTTP response which only includes the status and header data,
       * but no response body.
       *
       * `HttpHeaderResponse` is a `HttpEvent` available on the response
       * event stream, only when progress events are requested.
       *
       * @publicApi
       */


      var HttpHeaderResponse = /*#__PURE__*/function (_HttpResponseBase) {
        _inherits(HttpHeaderResponse, _HttpResponseBase);

        var _super = _createSuper(HttpHeaderResponse);

        /**
         * Create a new `HttpHeaderResponse` with the given parameters.
         */
        function HttpHeaderResponse() {
          var _this12;

          var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, HttpHeaderResponse);

          _this12 = _super.call(this, init);
          _this12.type = HttpEventType.ResponseHeader;
          return _this12;
        }
        /**
         * Copy this `HttpHeaderResponse`, overriding its contents with the
         * given parameter hash.
         */


        _createClass(HttpHeaderResponse, [{
          key: "clone",
          value: function clone() {
            var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            // Perform a straightforward initialization of the new HttpHeaderResponse,
            // overriding the current parameters with new ones if given.
            return new HttpHeaderResponse({
              headers: update.headers || this.headers,
              status: update.status !== undefined ? update.status : this.status,
              statusText: update.statusText || this.statusText,
              url: update.url || this.url || undefined
            });
          }
        }]);

        return HttpHeaderResponse;
      }(HttpResponseBase);
      /**
       * A full HTTP response, including a typed response body (which may be `null`
       * if one was not returned).
       *
       * `HttpResponse` is a `HttpEvent` available on the response event
       * stream.
       *
       * @publicApi
       */


      var HttpResponse = /*#__PURE__*/function (_HttpResponseBase2) {
        _inherits(HttpResponse, _HttpResponseBase2);

        var _super2 = _createSuper(HttpResponse);

        /**
         * Construct a new `HttpResponse`.
         */
        function HttpResponse() {
          var _this13;

          var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, HttpResponse);

          _this13 = _super2.call(this, init);
          _this13.type = HttpEventType.Response;
          _this13.body = init.body !== undefined ? init.body : null;
          return _this13;
        }

        _createClass(HttpResponse, [{
          key: "clone",
          value: function clone() {
            var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return new HttpResponse({
              body: update.body !== undefined ? update.body : this.body,
              headers: update.headers || this.headers,
              status: update.status !== undefined ? update.status : this.status,
              statusText: update.statusText || this.statusText,
              url: update.url || this.url || undefined
            });
          }
        }]);

        return HttpResponse;
      }(HttpResponseBase);
      /**
       * A response that represents an error or failure, either from a
       * non-successful HTTP status, an error while executing the request,
       * or some other failure which occurred during the parsing of the response.
       *
       * Any error returned on the `Observable` response stream will be
       * wrapped in an `HttpErrorResponse` to provide additional context about
       * the state of the HTTP layer when the error occurred. The error property
       * will contain either a wrapped Error object or the error response returned
       * from the server.
       *
       * @publicApi
       */


      var HttpErrorResponse = /*#__PURE__*/function (_HttpResponseBase3) {
        _inherits(HttpErrorResponse, _HttpResponseBase3);

        var _super3 = _createSuper(HttpErrorResponse);

        function HttpErrorResponse(init) {
          var _this14;

          _classCallCheck(this, HttpErrorResponse);

          // Initialize with a default status of 0 / Unknown Error.
          _this14 = _super3.call(this, init, 0, 'Unknown Error');
          _this14.name = 'HttpErrorResponse';
          /**
           * Errors are never okay, even when the status code is in the 2xx success range.
           */

          _this14.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
          // a protocol-level failure of some sort. Either the request failed in transit
          // or the server returned an unsuccessful status code.

          if (_this14.status >= 200 && _this14.status < 300) {
            _this14.message = "Http failure during parsing for ".concat(init.url || '(unknown url)');
          } else {
            _this14.message = "Http failure response for ".concat(init.url || '(unknown url)', ": ").concat(init.status, " ").concat(init.statusText);
          }

          _this14.error = init.error || null;
          return _this14;
        }

        return HttpErrorResponse;
      }(HttpResponseBase);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
       * the given `body`. This function clones the object and adds the body.
       *
       * Note that the `responseType` *options* value is a String that identifies the
       * single data type of the response.
       * A single overload version of the method handles each response type.
       * The value of `responseType` cannot be a union, as the combined signature could imply.
       *
       */


      function addBody(options, body) {
        return {
          body: body,
          headers: options.headers,
          observe: options.observe,
          params: options.params,
          reportProgress: options.reportProgress,
          responseType: options.responseType,
          withCredentials: options.withCredentials
        };
      }
      /**
       * Performs HTTP requests.
       * This service is available as an injectable class, with methods to perform HTTP requests.
       * Each request method has multiple signatures, and the return type varies based on
       * the signature that is called (mainly the values of `observe` and `responseType`).
       *
       * Note that the `responseType` *options* value is a String that identifies the
       * single data type of the response.
       * A single overload version of the method handles each response type.
       * The value of `responseType` cannot be a union, as the combined signature could imply.
      
       *
       * @usageNotes
       * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
       *
       * ### HTTP Request Example
       *
       * ```
       *  // GET heroes whose name contains search term
       * searchHeroes(term: string): observable<Hero[]>{
       *
       *  const params = new HttpParams({fromString: 'name=term'});
       *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
       * }
       * ```
       *
       * Alternatively, the parameter string can be used without invoking HttpParams
       * by directly joining to the URL.
       * ```
       * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
       * ```
       *
       *
       * ### JSONP Example
       * ```
       * requestJsonp(url, callback = 'callback') {
       *  return this.httpClient.jsonp(this.heroesURL, callback);
       * }
       * ```
       *
       * ### PATCH Example
       * ```
       * // PATCH one of the heroes' name
       * patchHero (id: number, heroName: string): Observable<{}> {
       * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
       *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
       *    .pipe(catchError(this.handleError('patchHero')));
       * }
       * ```
       *
       * @see [HTTP Guide](guide/http)
       * @see [HTTP Request](api/common/http/HttpRequest)
       *
       * @publicApi
       */


      var HttpClient = /*#__PURE__*/function () {
        function HttpClient(handler) {
          _classCallCheck(this, HttpClient);

          this.handler = handler;
        }
        /**
         * Constructs an observable for a generic HTTP request that, when subscribed,
         * fires the request through the chain of registered interceptors and on to the
         * server.
         *
         * You can pass an `HttpRequest` directly as the only parameter. In this case,
         * the call returns an observable of the raw `HttpEvent` stream.
         *
         * Alternatively you can pass an HTTP method as the first parameter,
         * a URL string as the second, and an options hash containing the request body as the third.
         * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
         * type of returned observable.
         *   * The `responseType` value determines how a successful response body is parsed.
         *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
         * object as a type parameter to the call.
         *
         * The `observe` value determines the return type, according to what you are interested in
         * observing.
         *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
         * progress events by default.
         *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
         * where the `T` parameter depends on the `responseType` and any optionally provided type
         * parameter.
         *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
         *
         */


        _createClass(HttpClient, [{
          key: "request",
          value: function request(first, url) {
            var _this15 = this;

            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var req; // First, check whether the primary argument is an instance of `HttpRequest`.

            if (first instanceof HttpRequest) {
              // It is. The other arguments must be undefined (per the signatures) and can be
              // ignored.
              req = first;
            } else {
              // It's a string, so it represents a URL. Construct a request based on it,
              // and incorporate the remaining arguments (assuming `GET` unless a method is
              // provided.
              // Figure out the headers.
              var headers = undefined;

              if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
              } else {
                headers = new HttpHeaders(options.headers);
              } // Sort out parameters.


              var params = undefined;

              if (!!options.params) {
                if (options.params instanceof HttpParams) {
                  params = options.params;
                } else {
                  params = new HttpParams({
                    fromObject: options.params
                  });
                }
              } // Construct the request.


              req = new HttpRequest(first, url, options.body !== undefined ? options.body : null, {
                headers: headers,
                params: params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials
              });
            } // Start with an Observable.of() the initial request, and run the handler (which
            // includes all interceptors) inside a concatMap(). This way, the handler runs
            // inside an Observable chain, which causes interceptors to be re-run on every
            // subscription (this also makes retries re-run the handler, including interceptors).


            var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (req) {
              return _this15.handler.handle(req);
            })); // If coming via the API signature which accepts a previously constructed HttpRequest,
            // the only option is to get the event stream. Otherwise, return the event stream if
            // that is what was requested.

            if (first instanceof HttpRequest || options.observe === 'events') {
              return events$;
            } // The requested stream contains either the full response or the body. In either
            // case, the first step is to filter the event stream to extract a stream of
            // responses(s).


            var res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
              return event instanceof HttpResponse;
            })); // Decide which stream to return.

            switch (options.observe || 'body') {
              case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                  case 'arraybuffer':
                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                      // Validate that the body is an ArrayBuffer.
                      if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                        throw new Error('Response is not an ArrayBuffer.');
                      }

                      return res.body;
                    }));

                  case 'blob':
                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                      // Validate that the body is a Blob.
                      if (res.body !== null && !(res.body instanceof Blob)) {
                        throw new Error('Response is not a Blob.');
                      }

                      return res.body;
                    }));

                  case 'text':
                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                      // Validate that the body is a string.
                      if (res.body !== null && typeof res.body !== 'string') {
                        throw new Error('Response is not a string.');
                      }

                      return res.body;
                    }));

                  case 'json':
                  default:
                    // No validation needed for JSON responses, as they can be of any type.
                    return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                      return res.body;
                    }));
                }

              case 'response':
                // The response stream was requested directly, so return it.
                return res$;

              default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type ".concat(options.observe, "}"));
            }
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `DELETE` request to execute on the server. See the individual overloads for
           * details on the return type.
           *
           * @param url     The endpoint URL.
           * @param options The HTTP options to send with the request.
           *
           */

        }, {
          key: "delete",
          value: function _delete(url) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.request('DELETE', url, options);
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `GET` request to execute on the server. See the individual overloads for
           * details on the return type.
           */

        }, {
          key: "get",
          value: function get(url) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.request('GET', url, options);
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `HEAD` request to execute on the server. The `HEAD` method returns
           * meta information about the resource without transferring the
           * resource itself. See the individual overloads for
           * details on the return type.
           */

        }, {
          key: "head",
          value: function head(url) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            return this.request('HEAD', url, options);
          }
          /**
           * Constructs an `Observable` that, when subscribed, causes a request with the special method
           * `JSONP` to be dispatched via the interceptor pipeline.
           * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
           * API endpoints that don't support newer,
           * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
           * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
           * requests even if the API endpoint is not located on the same domain (origin) as the client-side
           * application making the request.
           * The endpoint API must support JSONP callback for JSONP requests to work.
           * The resource API returns the JSON response wrapped in a callback function.
           * You can pass the callback function name as one of the query parameters.
           * Note that JSONP requests can only be used with `GET` requests.
           *
           * @param url The resource URL.
           * @param callbackParam The callback function name.
           *
           */

        }, {
          key: "jsonp",
          value: function jsonp(url, callbackParam) {
            return this.request('JSONP', url, {
              params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
              observe: 'body',
              responseType: 'json'
            });
          }
          /**
           * Constructs an `Observable` that, when subscribed, causes the configured
           * `OPTIONS` request to execute on the server. This method allows the client
           * to determine the supported HTTP methods and other capabilites of an endpoint,
           * without implying a resource action. See the individual overloads for
           * details on the return type.
           */

        }, {
          key: "options",
          value: function options(url) {
            var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            return this.request('OPTIONS', url, _options);
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `PATCH` request to execute on the server. See the individual overloads for
           * details on the return type.
           */

        }, {
          key: "patch",
          value: function patch(url, body) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.request('PATCH', url, addBody(options, body));
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `POST` request to execute on the server. The server responds with the location of
           * the replaced resource. See the individual overloads for
           * details on the return type.
           */

        }, {
          key: "post",
          value: function post(url, body) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.request('POST', url, addBody(options, body));
          }
          /**
           * Constructs an observable that, when subscribed, causes the configured
           * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
           * with a new set of values.
           * See the individual overloads for details on the return type.
           */

        }, {
          key: "put",
          value: function put(url, body) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            return this.request('PUT', url, addBody(options, body));
          }
        }]);

        return HttpClient;
      }();

      HttpClient.ɵfac = function HttpClient_Factory(t) {
        return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HttpHandler));
      };

      HttpClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpClient,
        factory: HttpClient.ɵfac
      });

      HttpClient.ctorParameters = function () {
        return [{
          type: HttpHandler
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClient, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: HttpHandler
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
       *
       *
       */


      var HttpInterceptorHandler = /*#__PURE__*/function () {
        function HttpInterceptorHandler(next, interceptor) {
          _classCallCheck(this, HttpInterceptorHandler);

          this.next = next;
          this.interceptor = interceptor;
        }

        _createClass(HttpInterceptorHandler, [{
          key: "handle",
          value: function handle(req) {
            return this.interceptor.intercept(req, this.next);
          }
        }]);

        return HttpInterceptorHandler;
      }();
      /**
       * A multi-provider token that represents the array of registered
       * `HttpInterceptor` objects.
       *
       * @publicApi
       */


      var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('HTTP_INTERCEPTORS');

      var NoopInterceptor = /*#__PURE__*/function () {
        function NoopInterceptor() {
          _classCallCheck(this, NoopInterceptor);
        }

        _createClass(NoopInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            return next.handle(req);
          }
        }]);

        return NoopInterceptor;
      }();

      NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) {
        return new (t || NoopInterceptor)();
      };

      NoopInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NoopInterceptor,
        factory: NoopInterceptor.ɵfac
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoopInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Every request made through JSONP needs a callback name that's unique across the
      // whole page. Each request is assigned an id and the callback name is constructed
      // from that. The next id to be assigned is tracked in a global variable here that
      // is shared among all applications on the page.


      var nextRequestId = 0; // Error text given when a JSONP script is injected, but doesn't invoke the callback
      // passed in its URL.

      var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
      // have a request method JSONP.

      var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
      var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
      /**
       * DI token/abstract type representing a map of JSONP callbacks.
       *
       * In the browser, this should always be the `window` object.
       *
       *
       */

      var JsonpCallbackContext = function JsonpCallbackContext() {
        _classCallCheck(this, JsonpCallbackContext);
      };
      /**
       * Processes an `HttpRequest` with the JSONP method,
       * by performing JSONP style requests.
       * @see `HttpHandler`
       * @see `HttpXhrBackend`
       *
       * @publicApi
       */


      var JsonpClientBackend = /*#__PURE__*/function () {
        function JsonpClientBackend(callbackMap, document) {
          _classCallCheck(this, JsonpClientBackend);

          this.callbackMap = callbackMap;
          this.document = document;
          /**
           * A resolved promise that can be used to schedule microtasks in the event handlers.
           */

          this.resolvedPromise = Promise.resolve();
        }
        /**
         * Get the name of the next callback method, by incrementing the global `nextRequestId`.
         */


        _createClass(JsonpClientBackend, [{
          key: "nextCallback",
          value: function nextCallback() {
            return "ng_jsonp_callback_".concat(nextRequestId++);
          }
          /**
           * Processes a JSONP request and returns an event stream of the results.
           * @param req The request object.
           * @returns An observable of the response events.
           *
           */

        }, {
          key: "handle",
          value: function handle(req) {
            var _this16 = this;

            // Firstly, check both the method and response type. If either doesn't match
            // then the request was improperly routed here and cannot be handled.
            if (req.method !== 'JSONP') {
              throw new Error(JSONP_ERR_WRONG_METHOD);
            } else if (req.responseType !== 'json') {
              throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
            } // Everything else happens inside the Observable boundary.


            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              // The first step to make a request is to generate the callback name, and replace the
              // callback placeholder in the URL with the name. Care has to be taken here to ensure
              // a trailing &, if matched, gets inserted back into the URL in the correct place.
              var callback = _this16.nextCallback();

              var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=".concat(callback, "$1")); // Construct the <script> tag and point it at the URL.

              var node = _this16.document.createElement('script');

              node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
              // are closed over and track state across those callbacks.
              // The response object, if one has been received, or null otherwise.

              var body = null; // Whether the response callback has been called.

              var finished = false; // Whether the request has been cancelled (and thus any other callbacks)
              // should be ignored.

              var cancelled = false; // Set the response callback in this.callbackMap (which will be the window
              // object in the browser. The script being loaded via the <script> tag will
              // eventually call this callback.

              _this16.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this16.callbackMap[callback]; // Next, make sure the request wasn't cancelled in the meantime.

                if (cancelled) {
                  return;
                } // Set state to indicate data was received.


                body = data;
                finished = true;
              }; // cleanup() is a utility closure that removes the <script> from the page and
              // the response callback from the window. This logic is used in both the
              // success, error, and cancellation paths, so it's extracted out for convenience.


              var cleanup = function cleanup() {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                  node.parentNode.removeChild(node);
                } // Remove the response callback from the callbackMap (window object in the
                // browser).


                delete _this16.callbackMap[callback];
              }; // onLoad() is the success callback which runs after the response callback
              // if the JSONP script loads successfully. The event itself is unimportant.
              // If something went wrong, onLoad() may run without the response callback
              // having been invoked.


              var onLoad = function onLoad(event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                  return;
                } // We wrap it in an extra Promise, to ensure the microtask
                // is scheduled after the loaded endpoint has executed any potential microtask itself,
                // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496


                _this16.resolvedPromise.then(function () {
                  // Cleanup the page.
                  cleanup(); // Check whether the response callback has run.

                  if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                      url: url,
                      status: 0,
                      statusText: 'JSONP Error',
                      error: new Error(JSONP_ERR_NO_CALLBACK)
                    }));
                    return;
                  } // Success. body either contains the response body or null if none was
                  // returned.


                  observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK',
                    url: url
                  })); // Complete the stream, the response is over.

                  observer.complete();
                });
              }; // onError() is the error callback, which runs if the script returned generates
              // a Javascript error. It emits the error via the Observable error channel as
              // a HttpErrorResponse.


              var onError = function onError(error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                  return;
                }

                cleanup(); // Wrap the error in a HttpErrorResponse.

                observer.error(new HttpErrorResponse({
                  error: error,
                  status: 0,
                  statusText: 'JSONP Error',
                  url: url
                }));
              }; // Subscribe to both the success (load) and error events on the <script> tag,
              // and add it to the page.


              node.addEventListener('load', onLoad);
              node.addEventListener('error', onError);

              _this16.document.body.appendChild(node); // The request has now been successfully sent.


              observer.next({
                type: HttpEventType.Sent
              }); // Cancellation handler.

              return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true; // Remove the event listeners so they won't run if the events later fire.

                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError); // And finally, clean up the page.

                cleanup();
              };
            });
          }
        }]);

        return JsonpClientBackend;
      }();

      JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) {
        return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]));
      };

      JsonpClientBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JsonpClientBackend,
        factory: JsonpClientBackend.ɵfac
      });

      JsonpClientBackend.ctorParameters = function () {
        return [{
          type: JsonpCallbackContext
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonpClientBackend, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: JsonpCallbackContext
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /**
       * Identifies requests with the method JSONP and
       * shifts them to the `JsonpClientBackend`.
       *
       * @see `HttpInterceptor`
       *
       * @publicApi
       */


      var JsonpInterceptor = /*#__PURE__*/function () {
        function JsonpInterceptor(jsonp) {
          _classCallCheck(this, JsonpInterceptor);

          this.jsonp = jsonp;
        }
        /**
         * Identifies and handles a given JSONP request.
         * @param req The outgoing request object to handle.
         * @param next The next interceptor in the chain, or the backend
         * if no interceptors remain in the chain.
         * @returns An observable of the event stream.
         */


        _createClass(JsonpInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            if (req.method === 'JSONP') {
              return this.jsonp.handle(req);
            } // Fall through for normal HTTP requests.


            return next.handle(req);
          }
        }]);

        return JsonpInterceptor;
      }();

      JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) {
        return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](JsonpClientBackend));
      };

      JsonpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: JsonpInterceptor,
        factory: JsonpInterceptor.ɵfac
      });

      JsonpInterceptor.ctorParameters = function () {
        return [{
          type: JsonpClientBackend
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonpInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: JsonpClientBackend
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var XSSI_PREFIX = /^\)\]\}',?\n/;
      /**
       * Determine an appropriate URL for the response, by checking either
       * XMLHttpRequest.responseURL or the X-Request-URL header.
       */

      function getResponseUrl(xhr) {
        if ('responseURL' in xhr && xhr.responseURL) {
          return xhr.responseURL;
        }

        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
          return xhr.getResponseHeader('X-Request-URL');
        }

        return null;
      }
      /**
       * A wrapper around the `XMLHttpRequest` constructor.
       *
       * @publicApi
       */


      var XhrFactory = function XhrFactory() {
        _classCallCheck(this, XhrFactory);
      };
      /**
       * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
       *
       */


      var BrowserXhr = /*#__PURE__*/function () {
        function BrowserXhr() {
          _classCallCheck(this, BrowserXhr);
        }

        _createClass(BrowserXhr, [{
          key: "build",
          value: function build() {
            return new XMLHttpRequest();
          }
        }]);

        return BrowserXhr;
      }();

      BrowserXhr.ɵfac = function BrowserXhr_Factory(t) {
        return new (t || BrowserXhr)();
      };

      BrowserXhr.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: BrowserXhr,
        factory: BrowserXhr.ɵfac
      });

      BrowserXhr.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BrowserXhr, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * Uses `XMLHttpRequest` to send requests to a backend server.
       * @see `HttpHandler`
       * @see `JsonpClientBackend`
       *
       * @publicApi
       */


      var HttpXhrBackend = /*#__PURE__*/function () {
        function HttpXhrBackend(xhrFactory) {
          _classCallCheck(this, HttpXhrBackend);

          this.xhrFactory = xhrFactory;
        }
        /**
         * Processes a request and returns a stream of response events.
         * @param req The request object.
         * @returns An observable of the response events.
         */


        _createClass(HttpXhrBackend, [{
          key: "handle",
          value: function handle(req) {
            var _this17 = this;

            // Quick check to give a better error message when a user attempts to use
            // HttpClient.jsonp() without installing the HttpClientJsonpModule
            if (req.method === 'JSONP') {
              throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");
            } // Everything happens on Observable subscription.


            return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
              // Start by setting up the XHR object with request method, URL, and withCredentials flag.
              var xhr = _this17.xhrFactory.build();

              xhr.open(req.method, req.urlWithParams);

              if (!!req.withCredentials) {
                xhr.withCredentials = true;
              } // Add all the requested headers.


              req.headers.forEach(function (name, values) {
                return xhr.setRequestHeader(name, values.join(','));
              }); // Add an Accept header if one isn't present already.

              if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
              } // Auto-detect the Content-Type header if one isn't present already.


              if (!req.headers.has('Content-Type')) {
                var detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

                if (detectedType !== null) {
                  xhr.setRequestHeader('Content-Type', detectedType);
                }
              } // Set the responseType if one was requested.


              if (req.responseType) {
                var responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.

                xhr.responseType = responseType !== 'json' ? responseType : 'text';
              } // Serialize the request body if one is present. If not, this will be set to null.


              var reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
              // in two events - the HttpHeaderResponse event and the full HttpResponse
              // event. However, since response headers don't change in between these
              // two events, it doesn't make sense to parse them twice. So headerResponse
              // caches the data extracted from the response whenever it's first parsed,
              // to ensure parsing isn't duplicated.

              var headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
              // state, and memoizes it into headerResponse.

              var partialFromXhr = function partialFromXhr() {
                if (headerResponse !== null) {
                  return headerResponse;
                } // Read status and normalize an IE9 bug (https://bugs.jquery.com/ticket/1450).


                var status = xhr.status === 1223 ? 204 : xhr.status;
                var statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

                var headers = new HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.

                var url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

                headerResponse = new HttpHeaderResponse({
                  headers: headers,
                  status: status,
                  statusText: statusText,
                  url: url
                });
                return headerResponse;
              }; // Next, a few closures are defined for the various events which XMLHttpRequest can
              // emit. This allows them to be unregistered as event listeners later.
              // First up is the load event, which represents a response being fully available.


              var onLoad = function onLoad() {
                // Read response state from the memoized partial data.
                var _partialFromXhr = partialFromXhr(),
                    headers = _partialFromXhr.headers,
                    status = _partialFromXhr.status,
                    statusText = _partialFromXhr.statusText,
                    url = _partialFromXhr.url; // The body will be read out if present.


                var body = null;

                if (status !== 204) {
                  // Use XMLHttpRequest.response if set, responseText otherwise.
                  body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
                } // Normalize another potential bug (this one comes from CORS).


                if (status === 0) {
                  status = !!body ? 200 : 0;
                } // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.


                var ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).

                if (req.responseType === 'json' && typeof body === 'string') {
                  // Save the original body, before attempting XSSI prefix stripping.
                  var originalBody = body;
                  body = body.replace(XSSI_PREFIX, '');

                  try {
                    // Attempt the parse. If it fails, a parse error should be delivered to the user.
                    body = body !== '' ? JSON.parse(body) : null;
                  } catch (error) {
                    // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                    // JSON response. Restore the original body (including any XSSI prefix) to deliver
                    // a better error response.
                    body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
                    // just isn't JSON. Otherwise, deliver the parsing error to the user.

                    if (ok) {
                      // Even though the response status was 2xx, this is still an error.
                      ok = false; // The parse error contains the text of the body that failed to parse.

                      body = {
                        error: error,
                        text: body
                      };
                    }
                  }
                }

                if (ok) {
                  // A successful response is delivered on the event stream.
                  observer.next(new HttpResponse({
                    body: body,
                    headers: headers,
                    status: status,
                    statusText: statusText,
                    url: url || undefined
                  })); // The full body has been received and delivered, no further events
                  // are possible. This request is complete.

                  observer.complete();
                } else {
                  // An unsuccessful request is delivered on the error channel.
                  observer.error(new HttpErrorResponse({
                    // The error in this case is the response body (error from the server).
                    error: body,
                    headers: headers,
                    status: status,
                    statusText: statusText,
                    url: url || undefined
                  }));
                }
              }; // The onError callback is called when something goes wrong at the network level.
              // Connection timeout, DNS error, offline, etc. These are actual errors, and are
              // transmitted on the error channel.


              var onError = function onError(error) {
                var _partialFromXhr2 = partialFromXhr(),
                    url = _partialFromXhr2.url;

                var res = new HttpErrorResponse({
                  error: error,
                  status: xhr.status || 0,
                  statusText: xhr.statusText || 'Unknown Error',
                  url: url || undefined
                });
                observer.error(res);
              }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
              // has been sent on the stream. This is necessary to track if progress
              // is enabled since the event will be sent on only the first download
              // progerss event.


              var sentHeaders = false; // The download progress event handler, which is only registered if
              // progress events are enabled.

              var onDownProgress = function onDownProgress(event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                  observer.next(partialFromXhr());
                  sentHeaders = true;
                } // Start building the download progress event to deliver on the response
                // event stream.


                var progressEvent = {
                  type: HttpEventType.DownloadProgress,
                  loaded: event.loaded
                }; // Set the total number of bytes in the event if it's available.

                if (event.lengthComputable) {
                  progressEvent.total = event.total;
                } // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.


                if (req.responseType === 'text' && !!xhr.responseText) {
                  progressEvent.partialText = xhr.responseText;
                } // Finally, fire the event.


                observer.next(progressEvent);
              }; // The upload progress event handler, which is only registered if
              // progress events are enabled.


              var onUpProgress = function onUpProgress(event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var progress = {
                  type: HttpEventType.UploadProgress,
                  loaded: event.loaded
                }; // If the total number of bytes being uploaded is available, include
                // it.

                if (event.lengthComputable) {
                  progress.total = event.total;
                } // Send the event.


                observer.next(progress);
              }; // By default, register for load and error events.


              xhr.addEventListener('load', onLoad);
              xhr.addEventListener('error', onError);
              xhr.addEventListener('timeout', onError);
              xhr.addEventListener('abort', onError); // Progress events are only enabled if requested.

              if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

                if (reqBody !== null && xhr.upload) {
                  xhr.upload.addEventListener('progress', onUpProgress);
                }
              } // Fire the request, and notify the event stream that it was fired.


              xhr.send(reqBody);
              observer.next({
                type: HttpEventType.Sent
              }); // This is the return from the Observable function, which is the
              // request cancellation handler.

              return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('abort', onError);
                xhr.removeEventListener('load', onLoad);
                xhr.removeEventListener('timeout', onError);

                if (req.reportProgress) {
                  xhr.removeEventListener('progress', onDownProgress);

                  if (reqBody !== null && xhr.upload) {
                    xhr.upload.removeEventListener('progress', onUpProgress);
                  }
                } // Finally, abort the in-flight request.


                if (xhr.readyState !== xhr.DONE) {
                  xhr.abort();
                }
              };
            });
          }
        }]);

        return HttpXhrBackend;
      }();

      HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) {
        return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](XhrFactory));
      };

      HttpXhrBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpXhrBackend,
        factory: HttpXhrBackend.ɵfac
      });

      HttpXhrBackend.ctorParameters = function () {
        return [{
          type: XhrFactory
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpXhrBackend, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: XhrFactory
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_COOKIE_NAME');
      var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('XSRF_HEADER_NAME');
      /**
       * Retrieves the current XSRF token to use with the next outgoing request.
       *
       * @publicApi
       */

      var HttpXsrfTokenExtractor = function HttpXsrfTokenExtractor() {
        _classCallCheck(this, HttpXsrfTokenExtractor);
      };
      /**
       * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
       */


      var HttpXsrfCookieExtractor = /*#__PURE__*/function () {
        function HttpXsrfCookieExtractor(doc, platform, cookieName) {
          _classCallCheck(this, HttpXsrfCookieExtractor);

          this.doc = doc;
          this.platform = platform;
          this.cookieName = cookieName;
          this.lastCookieString = '';
          this.lastToken = null;
          /**
           * @internal for testing
           */

          this.parseCount = 0;
        }

        _createClass(HttpXsrfCookieExtractor, [{
          key: "getToken",
          value: function getToken() {
            if (this.platform === 'server') {
              return null;
            }

            var cookieString = this.doc.cookie || '';

            if (cookieString !== this.lastCookieString) {
              this.parseCount++;
              this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵparseCookieValue"])(cookieString, this.cookieName);
              this.lastCookieString = cookieString;
            }

            return this.lastToken;
          }
        }]);

        return HttpXsrfCookieExtractor;
      }();

      HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) {
        return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](XSRF_COOKIE_NAME));
      };

      HttpXsrfCookieExtractor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpXsrfCookieExtractor,
        factory: HttpXsrfCookieExtractor.ɵfac
      });

      HttpXsrfCookieExtractor.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [XSRF_COOKIE_NAME]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [XSRF_COOKIE_NAME]
            }]
          }];
        }, null);
      })();
      /**
       * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
       */


      var HttpXsrfInterceptor = /*#__PURE__*/function () {
        function HttpXsrfInterceptor(tokenService, headerName) {
          _classCallCheck(this, HttpXsrfInterceptor);

          this.tokenService = tokenService;
          this.headerName = headerName;
        }

        _createClass(HttpXsrfInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
            // Non-mutating requests don't require a token, and absolute URLs require special handling
            // anyway as the cookie set
            // on our origin is not the same as the token expected by another origin.

            if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
              return next.handle(req);
            }

            var token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

            if (token !== null && !req.headers.has(this.headerName)) {
              req = req.clone({
                headers: req.headers.set(this.headerName, token)
              });
            }

            return next.handle(req);
          }
        }]);

        return HttpXsrfInterceptor;
      }();

      HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) {
        return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](XSRF_HEADER_NAME));
      };

      HttpXsrfInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpXsrfInterceptor,
        factory: HttpXsrfInterceptor.ɵfac
      });

      HttpXsrfInterceptor.ctorParameters = function () {
        return [{
          type: HttpXsrfTokenExtractor
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [XSRF_HEADER_NAME]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: HttpXsrfTokenExtractor
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [XSRF_HEADER_NAME]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * An injectable `HttpHandler` that applies multiple interceptors
       * to a request before passing it to the given `HttpBackend`.
       *
       * The interceptors are loaded lazily from the injector, to allow
       * interceptors to themselves inject classes depending indirectly
       * on `HttpInterceptingHandler` itself.
       * @see `HttpInterceptor`
       */


      var HttpInterceptingHandler = /*#__PURE__*/function () {
        function HttpInterceptingHandler(backend, injector) {
          _classCallCheck(this, HttpInterceptingHandler);

          this.backend = backend;
          this.injector = injector;
          this.chain = null;
        }

        _createClass(HttpInterceptingHandler, [{
          key: "handle",
          value: function handle(req) {
            if (this.chain === null) {
              var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
              this.chain = interceptors.reduceRight(function (next, interceptor) {
                return new HttpInterceptorHandler(next, interceptor);
              }, this.backend);
            }

            return this.chain.handle(req);
          }
        }]);

        return HttpInterceptingHandler;
      }();

      HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) {
        return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]));
      };

      HttpInterceptingHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpInterceptingHandler,
        factory: HttpInterceptingHandler.ɵfac
      });

      HttpInterceptingHandler.ctorParameters = function () {
        return [{
          type: HttpBackend
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpInterceptingHandler, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], function () {
          return [{
            type: HttpBackend
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
          }];
        }, null);
      })();
      /**
       * Constructs an `HttpHandler` that applies interceptors
       * to a request before passing it to the given `HttpBackend`.
       *
       * Use as a factory function within `HttpClientModule`.
       *
       *
       */


      function interceptingHandler(backend) {
        var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        if (!interceptors) {
          return backend;
        }

        return interceptors.reduceRight(function (next, interceptor) {
          return new HttpInterceptorHandler(next, interceptor);
        }, backend);
      }
      /**
       * Factory function that determines where to store JSONP callbacks.
       *
       * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
       * in test environments. In that case, callbacks are stored on an anonymous object instead.
       *
       *
       */


      function jsonpCallbackContext() {
        if (typeof window === 'object') {
          return window;
        }

        return {};
      }
      /**
       * Configures XSRF protection support for outgoing requests.
       *
       * For a server that supports a cookie-based XSRF protection system,
       * use directly to configure XSRF protection with the correct
       * cookie and header names.
       *
       * If no names are supplied, the default cookie name is `XSRF-TOKEN`
       * and the default header name is `X-XSRF-TOKEN`.
       *
       * @publicApi
       */


      var HttpClientXsrfModule = /*#__PURE__*/function () {
        function HttpClientXsrfModule() {
          _classCallCheck(this, HttpClientXsrfModule);
        }

        _createClass(HttpClientXsrfModule, null, [{
          key: "disable",
          value:
          /**
           * Disable the default XSRF protection.
           */
          function disable() {
            return {
              ngModule: HttpClientXsrfModule,
              providers: [{
                provide: HttpXsrfInterceptor,
                useClass: NoopInterceptor
              }]
            };
          }
          /**
           * Configure XSRF protection.
           * @param options An object that can specify either or both
           * cookie name or header name.
           * - Cookie name default is `XSRF-TOKEN`.
           * - Header name default is `X-XSRF-TOKEN`.
           *
           */

        }, {
          key: "withOptions",
          value: function withOptions() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return {
              ngModule: HttpClientXsrfModule,
              providers: [options.cookieName ? {
                provide: XSRF_COOKIE_NAME,
                useValue: options.cookieName
              } : [], options.headerName ? {
                provide: XSRF_HEADER_NAME,
                useValue: options.headerName
              } : []]
            };
          }
        }]);

        return HttpClientXsrfModule;
      }();

      HttpClientXsrfModule.ɵfac = function HttpClientXsrfModule_Factory(t) {
        return new (t || HttpClientXsrfModule)();
      };

      HttpClientXsrfModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HttpClientXsrfModule
      });
      HttpClientXsrfModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [HttpXsrfInterceptor, {
          provide: HTTP_INTERCEPTORS,
          useExisting: HttpXsrfInterceptor,
          multi: true
        }, {
          provide: HttpXsrfTokenExtractor,
          useClass: HttpXsrfCookieExtractor
        }, {
          provide: XSRF_COOKIE_NAME,
          useValue: 'XSRF-TOKEN'
        }, {
          provide: XSRF_HEADER_NAME,
          useValue: 'X-XSRF-TOKEN'
        }]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [HttpXsrfInterceptor, {
              provide: HTTP_INTERCEPTORS,
              useExisting: HttpXsrfInterceptor,
              multi: true
            }, {
              provide: HttpXsrfTokenExtractor,
              useClass: HttpXsrfCookieExtractor
            }, {
              provide: XSRF_COOKIE_NAME,
              useValue: 'XSRF-TOKEN'
            }, {
              provide: XSRF_HEADER_NAME,
              useValue: 'X-XSRF-TOKEN'
            }]
          }]
        }], null, null);
      })();
      /**
       * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
       * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
       *
       * You can add interceptors to the chain behind `HttpClient` by binding them to the
       * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
       *
       * @publicApi
       */


      var HttpClientModule = function HttpClientModule() {
        _classCallCheck(this, HttpClientModule);
      };

      HttpClientModule.ɵfac = function HttpClientModule_Factory(t) {
        return new (t || HttpClientModule)();
      };

      HttpClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HttpClientModule
      });
      HttpClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [HttpClient, {
          provide: HttpHandler,
          useClass: HttpInterceptingHandler
        }, HttpXhrBackend, {
          provide: HttpBackend,
          useExisting: HttpXhrBackend
        }, BrowserXhr, {
          provide: XhrFactory,
          useExisting: BrowserXhr
        }],
        imports: [[HttpClientXsrfModule.withOptions({
          cookieName: 'XSRF-TOKEN',
          headerName: 'X-XSRF-TOKEN'
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HttpClientModule, {
          imports: [HttpClientXsrfModule]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            /**
             * Optional configuration for XSRF protection.
             */
            imports: [HttpClientXsrfModule.withOptions({
              cookieName: 'XSRF-TOKEN',
              headerName: 'X-XSRF-TOKEN'
            })],

            /**
             * Configures the [dependency injector](guide/glossary#injector) where it is imported
             * with supporting services for HTTP communications.
             */
            providers: [HttpClient, {
              provide: HttpHandler,
              useClass: HttpInterceptingHandler
            }, HttpXhrBackend, {
              provide: HttpBackend,
              useExisting: HttpXhrBackend
            }, BrowserXhr, {
              provide: XhrFactory,
              useExisting: BrowserXhr
            }]
          }]
        }], null, null);
      })();
      /**
       * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
       * with supporting services for JSONP.
       * Without this module, Jsonp requests reach the backend
       * with method JSONP, where they are rejected.
       *
       * You can add interceptors to the chain behind `HttpClient` by binding them to the
       * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
       *
       * @publicApi
       */


      var HttpClientJsonpModule = function HttpClientJsonpModule() {
        _classCallCheck(this, HttpClientJsonpModule);
      };

      HttpClientJsonpModule.ɵfac = function HttpClientJsonpModule_Factory(t) {
        return new (t || HttpClientJsonpModule)();
      };

      HttpClientJsonpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: HttpClientJsonpModule
      });
      HttpClientJsonpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [JsonpClientBackend, {
          provide: JsonpCallbackContext,
          useFactory: jsonpCallbackContext
        }, {
          provide: HTTP_INTERCEPTORS,
          useClass: JsonpInterceptor,
          multi: true
        }]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            providers: [JsonpClientBackend, {
              provide: JsonpCallbackContext,
              useFactory: jsonpCallbackContext
            }, {
              provide: HTTP_INTERCEPTORS,
              useClass: JsonpInterceptor,
              multi: true
            }]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=http.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-portfolio-portfolio-module-es5.js.map